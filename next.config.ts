import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    "APP_NAME": process.env.APP_NAME,
    "AUTH_COOKIE_KEY": "token"
  },
  images: {
    domains: [
      "localhost"
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
};

export default nextConfig;
