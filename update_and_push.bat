@echo off
del vite.config.ts 2>nul
del vite.config.js 2>nul
del -r .vite 2>nul
git add .
git commit -m "Remove Vite configuration and update for Next.js"
git push origin cms-setup
