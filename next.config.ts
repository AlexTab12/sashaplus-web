import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean URLs: /privacy instead of /privacy.html
  trailingSlash: false,
};

export default nextConfig;
