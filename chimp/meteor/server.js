import DDP from './DDP'
import FrameworkDetector from '../framework-detector'

if (!process.env['DDP_URL']) {
  throw Error('If you want to use meteor/server please set up the ROOT_URL env first' +
    '(e.g. export DDP_URL=\'http://localhost:3000\') ')
}

const server = new DDP(process.env['DDP_URL'])

if (FrameworkDetector.isMocha()) {
  global.before(function () {
    server.connect()
  })
}

if (FrameworkDetector.isAva()) {
  const ava = require('ava')
  ava.test.before(() => {
    server.connect()
  })
}

if (FrameworkDetector.isJasmine()) {
  global.beforeAll(function () {
    server.connect()
  })
}

if (FrameworkDetector.isJest()) {
  global.beforeAll(function () {
    server.connect()
  })
}

if (FrameworkDetector.isCucumber()) {
  const cucumber = require('cucumber')
  cucumber.Before(function () {
    server.connect()
  })
}

export default server
