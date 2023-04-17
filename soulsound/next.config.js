/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: { domains: ["cdn.sanity.io"] },
};

module.exports = nextConfig;
