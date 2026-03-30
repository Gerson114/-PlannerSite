import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  trailingSlash: true,

  experimental: {
    useCache: true, // habilita o sistema 'use cache' com profiles do Next.js 16
  },

  images: {
    minimumCacheTTL: 86400, // cache de imagens por 24h
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'casa-dos-transformadores.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'head.agenciaplanner.dev',
      },
    ],
  },

  async headers() {
    // Desativa CSP estrito em modo de desenvolvimento (local)
    // para não bloquear estilos, scripts e Hot Module Reload no IP local (celular)
    if (process.env.NODE_ENV === "development") {
      return [];
    }

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://head.agenciaplanner.dev https://casa-dos-transformadores.s3.us-east-1.amazonaws.com https://images.unsplash.com",
              "media-src 'self'",
              "frame-src https://www.youtube.com https://youtube.com https://player.vimeo.com",
              "connect-src 'self' https://head.agenciaplanner.dev",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
