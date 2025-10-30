/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      // Handle admin with trailing slash
      {
        source: '/admin/',
        destination: '/admin',
      },
      // Handle admin without trailing slash
      {
        source: '/admin',
        destination: '/admin/',
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
  // Handle hash-based routing
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/#/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
