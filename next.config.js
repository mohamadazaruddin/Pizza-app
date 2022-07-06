const withPWA =require("next-pwa");
module.exports = withPWA({
reactStrictMode :true,
pwa:{
  dest:"piblic",
register:true,
skipWaiting:true,
}
}
)