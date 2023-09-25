/** @type {import('next').NextConfig} */
import withPlugins from 'next-compose-plugins';
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
};

export default withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
        },
      },
    ],
    // 추가 플러그인 작성
  ],
  nextConfig,
);
