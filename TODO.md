# Chimp 2.0

## Priorities

### Must
* [x] Add linting to the test cycle
* [x] Setup on CircleCI
  * [x] Setup caching
* [x] Rewrite `ChromeDriver` process management spike using TDD
* [x] Rewrite `BrowserFactory` spike using TDD
* [ ] Rewrite `DDP` module using using TDD
* [ ] Externalize *all* configs (timeouts etc)
* [ ] Put decent logging system in place
* [ ] Cucumber simple watch module (using @watch tags and all file changes) - Instructions for Gulp/Grunt
* [ ] Amazing documentation + examples
  * [ ] Diagrams + text showing how Chimp works
  * [ ] Migration instructions from Chimp 1.0 > 2.0
  * [ ] Detailed options docs
  * [x] Example of imports, debug mode etc
  * [x] Meteor DDP connections example
  * [ ] Where to go for other framework docs
  * [ ] Selenium Server integration + auto Xvfb https://www.npmjs.com/package/xvfb
  * [ ] SauceLabs example
  * [ ] BrowserStack example
  * [ ] CI examples
    * [ ] TestingBot
    * [ ] TravisCI
    * [ ] CircleCI
    * [ ] CodeShip
    * [ ] Jenkins
  * [ ] Test Framework Examples (expose from the test-project)
    * [ ] Mocha with Enzyme
    * [ ] Mocha with WebdriverIO
    * [ ] Mocha with Puppeteer
    * [ ] Jest with Enzyme
    * [ ] Jest with WebdriverIO
    * [ ] Jest with Puppeteer
    * [ ] Jasmine with Enzyme
    * [ ] Jasmine with WebdriverIO
    * [ ] Jasmine with Puppeteer
    * [ ] AVA with Enzyme
    * [ ] AVA with WebdriverIO
    * [ ] AVA with Puppeteer
    * [ ] Cucumber.js with Enzyme
    * [ ] Cucumber.js with WebdriverIO
    * [ ] Cucumber.js with Puppeteer
    * [ ] Cypress
    
* [ ] Automated Javascript Docs for API output (jsdoc?)

### Should
* [ ] Add colors library for messaging
* [ ] Add supported browser matrix testing on CI
* [ ] Add supported Node versions matrix testing on CI
* [ ] Log output to file from `LongRunningProcess`
* [ ] Make it work for other browsers (Firefox, Safari, IE)
* [x] Add Jasmine support (as well as Jest)
* [ ] Add Chimp test coverage reporting (coveralls?)

### Could
* [ ] DDP watcher - restarts when Meteor reloads (generalize for other frameworks too)
* [ ] Cucumber smart watch mode (using code coverage Wallaby style)  
* [ ] Session reuse module (belongs in Webdriver.io)
* [ ] Appium support (a downloader like Selenium)
* [ ] Support custom frameworks (expose factory + supporting code)
* [ ] Automatically detect the test framework
* [ ] Only start chromedriver on first use of the API (instead of at import time like it currently is)

## Plan
* *alpha release* 
  * [ ] Announce now
* *beta release*
  * [ ] Complete all tasks in the "Must" section and announce 
* *public 2.0 release* 
  * [ ] Used on 2+ Xolv.io/Brain client code bases
  * [ ] Complete working through feedback from above users 
  * [ ] Complete all tasks in the "Should" section
  * [ ] Deprecate Chimp 1.x