import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    dangerouslyAllowSVG: true,
  },
    experimental: {
        ppr: 'incremental'
    },

    devIndicators: {

        //appIsrStatus: true,
        //buildActivity: true,
        position: "bottom-right"
    }
};

export default nextConfig;
