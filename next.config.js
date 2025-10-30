/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable the static pages export
  output: 'standalone',
  // Enable the App Router
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.pinimg.com', 'avatars.githubusercontent.com', 'secure.gravatar.com'],
  },
  async rewrites() {
    return [
      // Handle Netlify CMS config
      {
        source: '/admin/config.yml',
        destination: '/api/config',
      },
      // Handle admin routes
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

// For production builds, ensure we're using the correct output directory
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'standalone';
  nextConfig.distDir = '.next';
}

module.exports = nextConfig;
