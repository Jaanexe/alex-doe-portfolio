/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable server components for static export
  experimental: {
    appDir: false,
  },
  // Enable static exports
  output: 'export',
  // Image optimization configuration
  images: {
    unoptimized: true, // Required for static exports
    domains: [
      'i.pinimg.com',
      'avatars.githubusercontent.com',
      'secure.gravatar.com'
    ],
    // Disable image optimization API for static exports
    loader: 'custom',
    loaderFile: './src/utils/image-loader.js',
  },
  // Configure rewrites for Netlify CMS - only in production
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
  // Disable image optimization API
  images: {
    loader: 'custom',
    loaderFile: './src/utils/image-loader.js',
  },
};

module.exports = nextConfig;
