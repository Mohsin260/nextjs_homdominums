// let publicUrl = process.env.NEXT_PUBLIC_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs-homdominums.vercel.app',
        // port: '',
        pathname: '/assets/**',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
