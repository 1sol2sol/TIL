/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
    {
    source: "/contact/:path*",
    destination:"/form/:path*",
    permanent: false, /// 브라우저가 계속 기억해야 하는지를 정함
    }
    ]
    },
  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
