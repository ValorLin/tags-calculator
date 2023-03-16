#!/bin/bash

# Get the current version number from package.json
VERSION=$(node -pe "require('./package.json').version")

# Increment the version number
NEW_VERSION=$(echo $VERSION | awk -F. '{$NF+=1; OFS="."; print $0}')

# Update the version number in package.json
npm version $NEW_VERSION --no-git-tag-version

# Clean up previous build files
rm -rf dist

# Generate new build files
yarn build

# Create a new `gh-pages` branch and switch to it
git checkout -b gh-pages

# Copy all files in the `dist` directory to the current directory (the root directory of the `gh-pages` branch)
cp -R dist/* .

# Commit the changes
git add .
git commit -m "Deploy to gh-pages"

# Create a new git tag
git tag v$NEW_VERSION

# Push the tag and the `gh-pages` branch to the remote repository
git push origin v$NEW_VERSION
git push origin gh-pages

# Switch back to the original branch
git checkout -