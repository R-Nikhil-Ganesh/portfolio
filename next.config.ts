import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export", // Tells Next.js to generate static HTML
  // Only apply a `basePath` in production so local dev serves `/`
  basePath: isProd ? "/portfolio" : undefined,
  images: {
    unoptimized: true, // Disables server-side image optimization (required for static export)
  },
};

export default nextConfig;