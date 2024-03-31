const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.saucedemo.com/",
    testIsolation:false
  },

  env:{
      userNameStandart:"standard_user",
      passwordStandart:"secret_sauce"
    }
  
});
