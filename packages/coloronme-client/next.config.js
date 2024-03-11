/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  images: {
    domains: ['k.kakaocdn.net'],
  },
};

module.exports = nextConfig;
