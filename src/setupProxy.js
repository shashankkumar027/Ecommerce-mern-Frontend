const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://ecommerce-j3kd.onrender.com",
      changeOrigin: true,
    })
  );
};


//Admin => shashankkumar.alld57@gmail.com   pswrd => shashank2781