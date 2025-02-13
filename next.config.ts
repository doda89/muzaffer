import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['tr'],    // Only Turkish if that's all you need
    defaultLocale: 'tr',
  },
  reactStrictMode: true,
};

export default nextConfig;
