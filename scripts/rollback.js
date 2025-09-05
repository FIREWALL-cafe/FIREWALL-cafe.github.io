#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

// Colors for output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function checkGcloudAuth() {
  try {
    execSync('gcloud auth list --filter=status:ACTIVE --format="value(account)"', { stdio: 'pipe' });
  } catch (error) {
    log('❌ No active gcloud authentication found. Please run "gcloud auth login"', colors.red);
    process.exit(1);
  }
}

function getRecentVersions() {
  try {
    log('🔍 Fetching recent deployed versions...', colors.yellow);
    const output = execSync('gcloud app versions list --limit=3 --format="table(id,service,traffic_split,last_deployed_time)" --sort-by="~last_deployed_time"', 
      { encoding: 'utf8' });
    
    log('\n📋 Most recent 3 deployed versions:', colors.blue);
    console.log(output);
    
    // Extract version IDs from the output
    const lines = output.trim().split('\n').slice(1); // Skip header
    const versions = [];
    
    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 4 && parts[0] !== 'ID') {
        versions.push({
          id: parts[0],
          service: parts[1] || 'default',
          traffic: parts[2] || '0.00',
          deployed: parts.slice(3).join(' ') || 'Unknown'
        });
      }
    }
    
    return versions;
  } catch (error) {
    log('❌ Failed to fetch versions. Make sure you have the correct project selected.', colors.red);
    log('   Run: gcloud config set project YOUR_PROJECT_ID', colors.yellow);
    process.exit(1);
  }
}

function promptForVersion(versions) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    log('\n🎯 Select a version to rollback to:', colors.green);
    versions.forEach((version, index) => {
      const current = version.traffic === '1.00' ? ' (CURRENT)' : '';
      log(`  ${index + 1}. ${version.id} - Traffic: ${version.traffic} - Deployed: ${version.deployed}${current}`, colors.blue);
    });

    rl.question('\nEnter version number (1-3) or version ID: ', (answer) => {
      rl.close();
      
      // Check if it's a number (1-3) or a version ID
      const num = parseInt(answer);
      if (num >= 1 && num <= versions.length) {
        resolve(versions[num - 1].id);
      } else if (versions.some(v => v.id === answer)) {
        resolve(answer);
      } else {
        log('❌ Invalid selection. Please run the script again.', colors.red);
        process.exit(1);
      }
    });
  });
}

function rollbackToVersion(versionId) {
  try {
    log(`🔄 Rolling back to version: ${versionId}...`, colors.yellow);
    
    // Use the deploy script with the specific version
    execSync(`node scripts/deploy.js ${versionId}`, { stdio: 'inherit', cwd: process.cwd() });
    
    log('✅ Rollback completed successfully!', colors.green);
    
    // Show current traffic allocation
    log('\n📊 Current traffic allocation:', colors.blue);
    execSync('gcloud app versions list --format="table(id,service,traffic_split)" --filter="traffic_split>0"', 
      { stdio: 'inherit' });
      
  } catch (error) {
    log('❌ Rollback failed. Check the error messages above.', colors.red);
    process.exit(1);
  }
}

async function main() {
  log('🔄 Firewall Cafe Rollback Tool', colors.green);
  log('====================================', colors.green);

  // Check if gcloud is installed and authenticated
  try {
    execSync('gcloud --version', { stdio: 'pipe' });
  } catch (error) {
    log('❌ gcloud CLI is not installed. Please install it first.', colors.red);
    process.exit(1);
  }

  checkGcloudAuth();

  // Get recent versions
  const versions = getRecentVersions();
  
  if (versions.length === 0) {
    log('❌ No versions found. Make sure you have deployed versions available.', colors.red);
    process.exit(1);
  }

  // Prompt user to select version
  const selectedVersion = await promptForVersion(versions);
  
  // Confirm the rollback
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`\n⚠️  Are you sure you want to rollback to version ${selectedVersion}? (y/N): `, (answer) => {
    rl.close();
    
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      rollbackToVersion(selectedVersion);
    } else {
      log('🚫 Rollback cancelled.', colors.yellow);
    }
  });
}

main().catch(error => {
  log(`❌ Unexpected error: ${error.message}`, colors.red);
  process.exit(1);
});