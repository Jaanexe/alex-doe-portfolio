@echo off
(
echo {
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/admin/(.*)",
      "dest": "/admin/index.html"
    }
  ]
}
) > vercel.json

git add .
git commit -m "Add vercel.json configuration"
git push origin cms-setup
