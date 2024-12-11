//** @type {import('next').NextConfig} */
//const nextConfig = {};

//export default nextConfig;
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos"
      }
    ]
  }
};
export default nextConfig;

//module.exports = nextConfig;
