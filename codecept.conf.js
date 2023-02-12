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
    }
  },
  include: {
    "I": "./steps_file.js",
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
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
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