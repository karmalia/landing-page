/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["camo.githubusercontent.com"],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/about-me",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
