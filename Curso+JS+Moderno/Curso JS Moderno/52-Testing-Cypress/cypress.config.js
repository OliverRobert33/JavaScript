
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 800,
  // baseUrl: "http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
