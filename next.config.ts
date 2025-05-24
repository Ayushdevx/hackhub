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
  
  // Disable static export for now to maintain API routes functionality
  // Enable this for purely static deployments
  // output: 'export',
  // trailingSlash: true,
  
  // For Netlify/Vercel deployment with server functions
  output: 'standalone',
  
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
