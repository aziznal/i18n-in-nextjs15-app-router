import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

let nextConfig: NextConfig = {
  /* config options here */
};

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");
nextConfig = withNextIntl(nextConfig);

export default nextConfig;
