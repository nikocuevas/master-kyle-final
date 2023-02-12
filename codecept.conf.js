exports.config = {
  output: './output',
  helpers: {
    
    WebDriver: {
      url: 'https://owens.com',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: true,
      windowSize: '1600x753',
      //keepCookies: true,
      //smartWait: 30000,
    },
  },
  include: {
    "I": "./steps_file.js",
  },
  multiple:{
    basic:{
      "browsers": [
        {
            browser: "chrome",
            desiredCapabilities:{
               browserName: "chrome", 
            },
         //   outputName: "chrome"
        },
        {
            browser: "MicrosoftEdge",
           // outputName: "edge"
        }
    ]
    },
  },
  mocha: {},
  bootstrap: null,
  timeout: 60,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },
  plugins: {
    allure: {
      enabled: true,
      outputDir: "./allure-results",
      addConsoleLogs: true,
    },
    autoDelay: {
      enabled: true,
      delayAfter: 2000,
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      deleteSuccessful: true,
      screenshotOnFail: true,
      //output: "./allure-results",
    },
    screenshotOnFail: {
      enabled: false
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'master-kyle-final'
}