const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1024,
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  responseTimeout: 30000,
  pageLoadTimeout: 20000,
  video: false,
  watchForFileChanges: false,
  retries: {
      runMode: 2,
  },
  e2e: {
      baseUrl: 'https://wave-trial.getbynder.com/',
  },
});
