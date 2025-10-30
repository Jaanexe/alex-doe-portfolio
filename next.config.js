/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['i.pinimg.com', 'avatars.githubusercontent.com', 'secure.gravatar.com'],
    unoptimized: true, // Required for static exports
  },
  // Configure rewrites for Netlify CMS
  async rewrites() {
    if (process.env.NODE_ENV === 'production') {
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
    }
    return [];
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
  // Enable static exports
  output: 'export',
  // Disable server components for static export
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
