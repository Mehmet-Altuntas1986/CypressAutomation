const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}



module.exports = defineConfig({
  e2e: {
    setupNodeEvents,     //call the  setupnodevents function above from here

    specPattern: 'cypress/integration/examples/*.js'
   // specPattern: 'cypress/integration/examples/BDD/*.feature'

  },


  defaultCommandTimeout: 6000,


//how many times you want to rerun failed tests  , default values waren runMode:0    openMode:0   
retries:{
  runMode:1,
  openMode:0
},

reporter: 'mochawesome',


//cypress cloud gives this id
projectId: "mgcptc",




//Different url can be added here to call in test files
env:{
url:'https://rahulshettyacademy.com/angularpractice/',
//url: "https://rahulshettyacademy.com",

},






});
