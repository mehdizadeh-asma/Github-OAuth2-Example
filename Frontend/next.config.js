/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_CLIENTID: process.env.GITHUB_CLIENTID,
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
