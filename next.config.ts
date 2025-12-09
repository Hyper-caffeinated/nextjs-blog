import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/nextjs-blog",
  assetPrefix: "/nextjs-blog", // test: should be isProd ? '/<repository-name>' : '',
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
