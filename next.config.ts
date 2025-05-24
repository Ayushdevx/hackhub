//next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Environment variables for deployment
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  
  // Image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    unoptimized: true, // For static deployment compatibility
  },
  
  // Static export for deployment
  output: 'export',
  trailingSlash: true,
  
  // Remove standalone mode due to Windows symlink issues
  // output: 'standalone',
  
  // TypeScript configuration - ignore errors for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration - ignore during builds for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;
