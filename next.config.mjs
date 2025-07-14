/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      formats: ["image/webp"],
      deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920, 2048, 3840],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "localhost",
        },
        {
        protocol: "https",
        hostname: "raw.githubusercontent.com", 
      },
        // ...(process.env.NEXT_PUBLIC_API_URL ? [{
        //   protocol: "https",
        //   hostname: process.env.NEXT_PUBLIC_API_IMAGE_URL,
        // }] : []),
      ],
      // unoptimized: true,
    },
    // async headers() { ... },
  };
  
  export default nextConfig;
  