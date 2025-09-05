#!/usr/bin/env node

const { execSync } = require('child_process');

// Colors for output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function exec(command, description) {
  log(`📋 ${description}...`, colors.yellow);
  try {
    execSync(command, { stdio: 'inherit', cwd: process.cwd() });
  } catch (error) {
    log(`❌ Failed: ${description}`, colors.red);
    process.exit(1);
  }
}

function checkGcloudAuth() {
  try {
    execSync('gcloud auth list --filter=status:ACTIVE --format="value(account)"', { stdio: 'pipe' });
  } catch (error) {
    log('❌ No active gcloud authentication found. Please run "gcloud auth login"', colors.red);
    process.exit(1);
  }
}

function main() {
  log('🚀 Starting deployment process...', colors.green);

  // Check if gcloud is installed and authenticated
  try {
    execSync('gcloud --version', { stdio: 'pipe' });
  } catch (error) {
    log('❌ gcloud CLI is not installed. Please install it first.', colors.red);
    process.exit(1);
  }

  checkGcloudAuth();

  // Run predeploy tasks (format, lint, build)
  exec('yarn run predeploy', 'Running predeploy tasks');

  // Prepare deploy command
  let deployCmd = 'gcloud app deploy --quiet';

  // Get version argument from command line
  const version = process.argv[2];
  if (version) {
    log(`🏷️  Deploying with version: ${version}`, colors.yellow);
    deployCmd += ` --version=${version}`;
  } else {
    log('🏷️  Deploying with auto-generated version', colors.yellow);
  }

  // Execute deployment
  exec(deployCmd, 'Deploying to Google App Engine');

  log('✅ Deployment completed successfully!', colors.green);

  // Show deployed URL
  try {
    const project = execSync('gcloud config get-value project', { encoding: 'utf8' }).trim();
    log(`🔗 Your app is live at: https://${project}.appspot.com`, colors.green);
  } catch (error) {
    log('🔗 Deployment complete! Check your GCP console for the URL.', colors.green);
  }
}

main();