const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
specPattern:'/Users/mehmetaltuntas/cypress_automation/cypress/integration/examples/*.js'  //virgul ile farkli peroperties e2e objectine eklenebilir
  },
});
