const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ff2tvi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8080",
  },
});
