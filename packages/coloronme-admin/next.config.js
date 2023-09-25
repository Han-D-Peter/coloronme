/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const isProduction = process.env.NODE_ENV === 'production';
const runtimeCaching = require('next-pwa/cache.js');

const config = {
  reactStrictMode: false,
  experimental: {
    externalDir: true,
  },
};

const nextConfig = withPWA({
  dest: 'public',
  disable: !isProduction,
  runtimeCaching: runtimeCaching,
})(config);

module.exports = nextConfig;
