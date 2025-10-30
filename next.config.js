/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pinimg.com', 'avatars.githubusercontent.com', 'secure.gravatar.com'],
  },
  async rewrites() {
    return [
      // Netlify CMS - Handle static assets
      {
        source: '/admin/config.yml',
        destination: '/api/config',
      },
      // Handle all other admin routes
      {
        source: '/admin/(.*)',
        destination: '/admin/index.html',
      },
    ];
  },
  // Required for NextAuth.js
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
