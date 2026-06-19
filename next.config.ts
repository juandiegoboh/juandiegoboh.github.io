import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  images: {
    unoptimized: true, // Next.js default image optimization needs a server
  },
};

export default withMDX(nextConfig);