/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig
module.exports = {
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "",
  },
};
