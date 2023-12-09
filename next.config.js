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
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/assets/**',
      },
    ],
  },
};

module.exports = nextConfig;