const withPWA = require("next-pwa");

module.exports = withPWA({
    images: {
      domains: ['images2.imgbox.com'],
    },
    pwa: {
      dest: "public",
      swSrc: "serviceWorker.js"
    }, 
});