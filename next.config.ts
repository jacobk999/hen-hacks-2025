import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/w500/*"
      },
      {
        protocol: "https",
        hostname: "v3.tailwindcss.com"
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "/image/*"
      },
      {
        protocol: "http",
        hostname: "books.google.com",
        pathname: "/books/content"
      }
    ]
  }
};

export default nextConfig;
