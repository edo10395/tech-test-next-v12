/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_SERVER_API_URL: process.env.NEXT_SERVER_API_URL,
    NEXT_API_URL: process.env.NEXT_API_URL,
  },
};

module.exports = nextConfig;
