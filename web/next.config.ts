import type { NextConfig } from "next";

// When deployed under a subpath (e.g. GitHub Pages at /<repo-name>/),
// the workflow sets NEXT_PUBLIC_BASE_PATH. Empty in dev and at custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
