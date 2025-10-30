/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Enable static exports
  output: 'export',
  // Disable the static pages optimization
  images: {
    unoptimized: true,
    domains: [
      'i.pinimg.com',
      'avatars.githubusercontent.com',
      'secure.gravatar.com'
    ]
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
};

// For production builds, ensure we're using the correct output directory
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
  nextConfig.images = {
    ...nextConfig.images,
    unoptimized: true,
  };
}

module.exports = nextConfig;
