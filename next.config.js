/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API: "https://hamiantitrader.hamimastermelon.repl.co",
  },
  images: {
    domains: ["mc-heads.net"],
  },
};

module.exports = nextConfig;
