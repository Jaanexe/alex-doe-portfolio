/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://alex-doe-portfolio.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'out',
  exclude: ['/admin*', '/api/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
  },
};
