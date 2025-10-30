# Create vercel.json with proper content
@'
{
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
'@ | Out-File -FilePath vercel.json -Encoding utf8 -NoNewline

# Add and commit the changes
git add .
git commit -m "Fix vercel.json configuration"
git push origin cms-setup
