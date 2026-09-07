import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.divinehindu.in' },
      { protocol: 'https', hostname: 'divinehindu.in' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'www.divinehindu.in.cdn.cloudflare.net' },
    ],
  },
};

export default nextConfig;
