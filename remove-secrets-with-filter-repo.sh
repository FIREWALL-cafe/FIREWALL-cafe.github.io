#!/bin/bash

echo "This script uses git filter-repo to remove server/config-secure.js from history"
echo "WARNING: This will rewrite git history. Make sure you have a backup!"
echo ""

# Check if git filter-repo is installed
if ! command -v git-filter-repo &> /dev/null; then
    echo "git-filter-repo is not installed."
    echo ""
    echo "To install it:"
    echo "  - On macOS with Homebrew: brew install git-filter-repo"
    echo "  - On Ubuntu/Debian: sudo apt-get install git-filter-repo"
    echo "  - Or install with pip: pip install git-filter-repo"
    echo ""
    echo "For more info: https://github.com/newren/git-filter-repo"
    exit 1
fi

read -p "Do you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Operation cancelled"
    exit 1
fi

echo "Removing server/config-secure.js from git history..."

# Use git filter-repo to remove the file
git filter-repo --path server/config-secure.js --invert-paths --force

echo "Done! The file has been removed from git history."
echo ""
echo "IMPORTANT NEXT STEPS:"
echo "1. You need to re-add your remote repository:"
echo "   git remote add origin <your-repo-url>"
echo ""
echo "2. Force push to update the remote repository:"
echo "   git push origin --force --all"
echo "   git push origin --force --tags"
echo ""
echo "WARNING: This has rewritten history. Make sure all team members are aware!"
echo ""
echo "3. All team members should delete their local repos and clone fresh:"
echo "   cd .."
echo "   rm -rf firewall"
echo "   git clone <your-repo-url>"