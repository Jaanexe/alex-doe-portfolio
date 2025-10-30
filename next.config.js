/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pinimg.com'],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
