@echo off
del vite.config.ts 2>nul
del vite.config.js 2>nul
del -r .vite 2>nul
echo {
  ^"version^": 2,
  ^"builds^": [
    {
      ^"src^": ^"package.json^",
      ^"use^": ^"@vercel/next^"
    }
  ],
  ^"routes^": [
    {
      ^"src^": ^"^/admin/(.*)^",
      ^"dest^": ^"/admin/index.html^"
    }
  ]
} > vercel.json

git add .
git commit -m "Add vercel.json and update configuration"
git push origin cms-setup
