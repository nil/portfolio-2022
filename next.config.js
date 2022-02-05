/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
  i18n: {
    locales: ['en', 'ca', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
