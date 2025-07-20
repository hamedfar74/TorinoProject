/** @type {import('next').NextConfig} */
const domain = new URL(process.env.NEXT_PUBLIC_BASE_URL).hostname;
const nextConfig = {
  images: {
    domains: [domain],
  },
};

module.exports = nextConfig;
