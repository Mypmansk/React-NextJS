const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Mypmansk/JSONServer/**",
      },
    ],
  },
};

module.exports = nextConfig;
