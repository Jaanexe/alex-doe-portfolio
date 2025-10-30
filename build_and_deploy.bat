@echo off
echo Installing dependencies...
npm install --legacy-peer-deps

echo Building the project...
npm run build

echo Adding files to git...
git add .

echo Committing changes...
git commit -m "Fix Next.js version and rebuild"

echo Pushing to repository...
git push origin cms-setup

echo Done! Check your Vercel dashboard for deployment status.
