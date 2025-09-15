const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opencart.abstracta.us",
    pageLoadTimeout: 120000,         // tiempo mayor para cargar páginas
    defaultCommandTimeout: 15000,
    chromeWebSecurity: false,
    video: true,                     // temporalmente desactiva video si fabrica problemas
    supportFile: "cypress/support/e2e.js",
  },
});
