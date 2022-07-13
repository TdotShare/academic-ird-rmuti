/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

//const setBasePath = isProd ? "/hometest" : "/"

module.exports = {
  setBasePath : "/",
  assetPrefix: isProd ? './' : '',
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}