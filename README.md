# Chimp.js
[![Circle CI](https://circleci.com/gh/xolvio/chimp.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/xolvio/chimp) [![npm Version](https://img.shields.io/npm/dm/chimp.svg)](https://www.npmjs.com/package/chimp) [![License](https://img.shields.io/npm/l/chimp.svg)](https://www.npmjs.com/package/chimp) [![Gitter](https://img.shields.io/gitter/room/xolvio/chimp.svg)](https://gitter.im/xolvio/chimp)  [![Slack Status](http://community.xolv.io/badge.svg)](http://community.xolv.io)

An awesome developer experience for writing GUI tests.

Chimp takes away all the pain associated with setting up libraries tools, and allow you to focus on building-in quality.

![Chimp by Xolv.io](./images/logo.png?raw=true)

Whether you're writing unit tests with React or end-to-end tests with Selenium, Chimp will help you write higher quality code, faster.  

Works with:
* Mocha, Jest, Jasmine, AVA or Cucumber.js
* Unit, integration, functional or end-to-end tests
* Enzyme, WebdriverIO, Chromeless or Puppeteer
* Web or Mobile


## Getting started
### 1. Install Chimp in your project:

```
npm i --save-dev chimp@next 
```
*Note: the `@next` tag will be removed once Chimp 2.0 is released.*

### 2. Import the Chimp `driver`

Use the import statement that matches the test framework you're using: 
```javascript
// Mocha
import driver from 'chimp/mocha/driver'

// Jest
import driver from 'chimp/jest/driver'      

// Jasmine
import driver from 'chimp/jasmine/driver'

// AVA
import driver from 'chimp/ava/driver'

// Cucumber
import driver from 'chimp/cucumber/driver'
```

### 3. Use the 'driver' object with the Chimp API
You get a fully initialized headless Chrome driver that you can automate using ES6's `async/await` to manage asynchrony like this:

```javascript
describe('The Xolv.io Website', function () {
  it('should have a title', async function () {
    await driver.url('https://xolv.io')

    const title = await driver.getTitle()

    expect(title).toEqual('Xolv.io')
  })
})
```

Save this file to `my-spec.js` and run it using your preferred runner, like Mocha's CLI for example:

```bash
mocha --compilers js:babel-core/register my-spec.js
```

That's it!

### Drivers (formerly Browsers)
In previous versions of Chimp, the automation object was a `browser`. While this is still available for backwards compatibility, the automation object is now a `driver`. This is because the driver may not always be a browser. For example, when you use Chimp with React, Chimp will use Enzyme, which uses JSDOM, which is not a browser per se.

Chimp provides a **common API** that can **interchangeably** be used across the following browsers:
- [x] WebdriverIO + ChromeDriver
- [ ] WebdriverIO + Selenium Grid (remote Firefox/IE/Safari - e.g. BrowserStack) 
- [ ] WebdriverIO + Selenium Standalone (local Firefox/IE/Safari)
- [ ] WebdriverIO + Appium (local Android/iOS/Windows)
- [ ] WebdriverIO + Appium (remote Android/iOS/Windows - e.g. SauceLabs)
- [ ] Enzyme
- [ ] Chromeless
- [ ] Puppeteer

Wait.. what? Interchangeably?  

Yes! You can use one API and swap out the driver and your tests will still work.

You see we love to reuse code, and we have found that it saves a lot of time to write page objects that can be use both in unit testing and in end-to-end testing. Here are some examples:

- [ ] PageObject that works in Enzyme and with WebdriverIO + ChromeDriver 
- [ ] PageObject that works in Enzyme and with Chromeless

For the full Chimp API, [see the API docs below](#chimp-api`)


### Debugging
Need to see what the driver is doing? No problem, just append `.debug` to your driver import like this:

```javascript
import driver from 'chimp/<test-framework>/driver.debug';
````

Chimp will give you a non-headless driver so you can do your job. This is very powerful when it's used with [Webdriver.io's REPL debug method](http://webdriver.io/api/utility/debug.html) like this:

```javascript
describe('The Xolv.io Website', function () {
  it('should have a title', async function () {
    await driver.url('https://xolv.io')

    const title = await driver.getTitle()
    
    await driver.debug() // you can now use the console REPL interface

    expect(title).toEqual('Xolv.io')
  })
})
```

Note: Be sure to set the test timeout value of your test framework to be high so it does not timeout and stop the test while you are debugging. Here's how you do this in the different testing frameworks:

```bash
mocha --compilers js:babel-core/register my-spec.js --watch --timeout 100000
``` 

### Watching
Since Chimp will work with any file watcher. You can use [Gulp.js](https://gulpjs.com), [Grunt](https://gruntjs.com), [Karma](https://karma-runner.github.io/2.0/index.html), a custom watcher that you've built, or some test frameworks that have a watch mode, like Mocha's CLI for example:
```bash
mocha --compilers js:babel-core/register my-spec.js --watch
```

Chimp does not care who or what is doing the watching, so long as Chimp is running in a long-running process, it will keep a dedicated driver running to be used for automation.

### Using Meteor?
Chimp has evolved from a Meteor project and we will always provide 1st class support for Meteor. You can get access to a DDP connection by doing the following:

```javascript
import server from 'chimp/mocha/meteor/server'    // Mocha
import server from 'chimp/jest/meteor/server'     // Jest
import server from 'chimp/jasmine/meteor/server'  // Jasmine
import server from 'chimp/cucumber/meteor/server' // Cucumber
import server from 'chimp/ava/meteor/server'      // AVA
``` 

Then you can use this `server` object to make DDP calls like this:

```javascript
const result = await server.call('your-meteor-method');
```
#### Executing remote code
> *NOTE: This feature is still in development and not yet ready. We're starting with the README to drive out the requirements*

And if you install the `xolvio/backdoor` Meteor package, you can also run code directly on the server like this:
```javascript
// write a function you'd like to run on the server
function getMeteorSettings(setting) {
  return Meteor.settings[setting]
}

// use server.execute to call the function within the Meteor context with parameters if needed
const mongoUrl = server.execute(getMeteorSettings, 'mongoUrl');

// returned values come back from the function that ran in the Meteor context
console.log(mongoUrl);
```

### Configuring Chimp
> *NOTE: This feature is still in development and not yet ready. We're starting with the README to drive out the requirements*

To configure Chimp, its drivers, and the tools & libraries that it uses, you have a few options available to you that are listed below.

#### Create a `chimp.config.js` file
This can be anywhere up the directory tree. The file looks something like this: 
```javascript
export default {
  driver: {
    // see below
  },
  meteor: {
    // see below
  }
}
```

#### Use the `package.json` 
This can be anywhere up the directory tree. The file looks something like this:
```json
{
  // ...
  chimp: {
    driver: {
      // see below
    },
    meteor: {
      // see below
    }
  }
}
```

#### Create a `chimprc` file 
This can be anywhere up the directory tree. The file looks something like this:
```json
{
  driver: {
    // see below
  },
  meteor: {
    // see below
  }
}
```

#### Configuration options
> *NOTE: This feature is still in development and not yet ready. We're starting with the README to drive out the requirements*

##### driver

###### webdriverio
When you use this driver, Chimp starts a [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/) instance for you by default. 

If you would like to use other drivers like `firefox`, `safari` and `msie`, then you need to tell Webdriver.IO to set the `desiredCapabilities` in the configuration. For example, if you wanted to use Firefox, you do this:
```javascript
{
  driver: {
    name: 'webdriverio',
    options: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
}
```

When Chimp sees that you've used a different driver than Chrome, it will automatically download and start Selenium for you. 

Chimp passes any configuration you place in here directly to Webdriver.io. [Please see the Webdriver.io configuration documentation](http://webdriver.io/guide/getstarted/configuration.html) to see what's available.

##### meteor
TODO


## Chimp API

#### getDriver()
Chimp provides you with a common API that you can use across frameworks. However, sometimes you may want to do something that is only available for a given driver. You can use this method to get direct access to the underlying driver.

CAUTION: Be mindful that if you use this function, the code that uses this method will not be runnable across different driver. Instead of using the driver directly, you might want to consider the `addCommand` method that allows you add multiple implementations.

If you find a command that you use that is not supported, please get in touch to let us know, or even better submit a Pull Request. You can see the guidelines for []adding common API command here]() TODO.  


## Links to underlying driver APIs
* [WebdriverIO + Selenium]() TODO
* [WebdriverIO + Appium]() TODO
* [Enzyme]() TODO
* [Chromeless()]() TODO
* [Puppeteer]() TODO

---

## Chimp Developers Guide:
We've made it easy for you to get ready to submit PR's and develop Chimp features. To get up and running, follow these steps:

We develop on the latest versions of everything (Node, NPM and packages), and we use tests to ensure backwards compatibility on CI.

1. Make sure you're on the latest version of Node and NPM. We recommend using [NVM](https://github.com/creationix/nvm).
2. `git clone git@github.com:xolvio/chimp.git` 
3. `npm run setup` - [See below](#npm-run-setup`) 
4. `npm run watch` - [See below](#npm-run-watch`)

You can now make changes to the source files in the Chimp directory and use the `./test-project` directory to use features within testing frameworks. 

Within the `test-project` directory, you can run the following npm scripts:
```bash
# run individual test frameworks
npm run mocha
npm run jest
npm run jasmine
npm run cucumber
npm run ava
```

### Available NPM Scripts
The following scripts are available to you as a developer to help you with submitting new features and PR's. See below for a description of each:

###### `npm run clean`
TODO 

###### `npm run transpile`
TODO 

###### `npm run watch`
TODO 

###### `npm run test`
TODO 

###### `npm run prebpublish`
TODO 

###### `npm run install`
TODO 

###### `npm run setup`
TODO 

###### `npm run reset`
TODO 


## Releasing
1. Increase the version in the `chimp/package.json` file
2. `npm run publish`
```

