import DriverFactory from './driver-factory'
import FrameworkDetector from './framework-detector'
import {beforeHook, afterHook} from './hooks'

// TODO abstract away the underlying driver
const port = 9515
const host = '127.0.0.1'
const desiredCapabilities = {
  driverName: 'chrome',
  chromeOptions: {
    'args': ['--headless']
  }
}

const driver = new DriverFactory({}).create({port, host, desiredCapabilities})

if (FrameworkDetector.isMocha()) {
  global.before(beforeHook(driver, __filename))
  global.after(afterHook(driver))
}

if (FrameworkDetector.isAva()) {
  const ava = require('ava')
  ava.test.before(beforeHook(driver, __filename))
  ava.test.after(afterHook(driver))
}

if (FrameworkDetector.isJasmine()) {
  global.beforeAll(beforeHook(driver, __filename))
  global.afterAll(afterHook(driver))
}

if (FrameworkDetector.isJest()) {
  global.beforeAll(beforeHook(driver, __filename))
  global.afterAll(afterHook(driver))
}

if (FrameworkDetector.isCucumber()) {
  const cucumber = require('cucumber')
  cucumber.Before(beforeHook(driver, __filename))
  cucumber.After(afterHook(driver))
}

export default driver
