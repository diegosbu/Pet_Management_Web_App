const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) { 
  app.use('/register', createProxyMiddleware({target: 'http://localhost:5000', changeOrigin: true,}));
  app.use('/login', createProxyMiddleware({target: 'http://localhost:5000', changeOrigin: true,}));
};