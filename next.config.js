/** @type {import('next').NextConfig} */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL.slice(8)
const nextConfig = {images: {
    domains: [url],
  },};

module.exports = nextConfig;
