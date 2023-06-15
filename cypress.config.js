const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7aha1r",
  e2e: {
    baseUrl: "http://localhost:3000/",
    experimentalRunAllSpecs : true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
