/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['i.pinimg.com', 'avatars.githubusercontent.com', 'secure.gravatar.com'],
  },
  // Disable static exports as we're using server components
  output: 'export',
  // Handle static exports for the admin route
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/admin': { page: '/admin' },
    };
  },
  // Configure rewrites for Netlify CMS
  async rewrites() {
    return [
      {
        source: '/admin/config.yml',
        destination: '/api/config',
      },
      {
        source: '/admin/:path*',
        destination: '/admin',
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
  // Handle trailing slashes
  trailingSlash: true,
};

module.exports = nextConfig;
