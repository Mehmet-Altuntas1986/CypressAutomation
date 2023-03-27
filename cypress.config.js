const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  
e2e: {

setupNodeEvents(on, config) {
      // implement node event listeners here
    },
specPattern:'/Users/mehmetaltuntas/cypress_automation/cypress/integration/examples/*.js'  //virgul ile farkli peroperties e2e objectine eklenebilir

},

defaultCommandTimeout:6000,

//Different url can be added here to call in test files
env:{
url:'https://rahulshettyacademy.com/angularpractice/',

},





});
