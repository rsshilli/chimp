describe('DriverFactory', function () {
  beforeEach(function () {
    td.reset()
    this.chromedriver = {}
    this.webdriverio = {remote: td.function()}
    this.childProcess = {spawnSync: td.function()}
    const DriverFactory = require('./driver-factory').default
    this.driverFactory = new DriverFactory({
      chromedriver: this.chromedriver,
      webdriverio: this.webdriverio,
      childProcess: this.childProcess
    })
  })
  describe('create', function () {
    it('should start a webdriver hub', function () {
      this.driverFactory._maybeStartWebdriverHub = td.function()
      this.driverFactory._startDriver = td.function()

      this.driverFactory.create({
        port: 1234,
        host: '1.2.3.4',
        desiredCapabilities: {'some': 'capability'},
        webdriverHubImpl: 'some-driver'
      })

      td.verify(this.driverFactory._maybeStartWebdriverHub())
    })
    it('should return a driver', function () {
      this.driverFactory._maybeStartWebdriverHub = td.function()
      this.driverFactory._startDriver = td.function()
      const expectedDriver = 'chrome'
      td.when(this.driverFactory._startDriver()).thenReturn(expectedDriver)

      const actualDriver = this.driverFactory.create({
        port: 1234,
        host: '1.2.3.4',
        desiredCapabilities: {'some': 'capability'},
        webdriverHubImpl: 'some-driver'
      })

      expect(actualDriver).to.equal(expectedDriver)
    })
  })
  describe('_maybeStartWebdriverHub', function () {
    beforeEach(function () {
      this.driverFactory.port = 1234
      delete global[`__webdriverHub${this.driverFactory.port}`]
      this.driverFactory._startWebdriverHub = td.function()
    })
    it('should start the webdriver hub impl', function () {
      td.when(this.driverFactory._startWebdriverHub()).thenReturn({status: 0})
      this.driverFactory._getWebdriverHubImpl = td.function()

      this.driverFactory._maybeStartWebdriverHub()

      td.verify(this.driverFactory._startWebdriverHub())
    })
    it('should throw an error if it cannot start the webdriver hub impl', function () {
      this.driverFactory.webdriverHubImpl = 'some-driver'
      td.when(this.driverFactory._startWebdriverHub()).thenReturn({status: 1})

      expect(() => {
        this.driverFactory._maybeStartWebdriverHub()
      }).to.throw('[Chimp.DriverFactory] Could not start some-driver')
    })
    it('should not start a webdriver impl if it has already been started on that port', function () {
      td.when(this.driverFactory._startWebdriverHub()).thenReturn({status: 0})

      this.driverFactory._maybeStartWebdriverHub()
      this.driverFactory._maybeStartWebdriverHub()

      td.verify(this.driverFactory._startWebdriverHub(), {times: 1})
    })
  })
  describe('_startWebdriverHub', function () {
    it('should return chromedriver when the chromedriver option is set', function () {
      this.driverFactory._startChromeDriver = td.function()
      this.driverFactory.webdriverHubImpl = 'chromedriver'

      this.driverFactory._startWebdriverHub()

      td.verify(this.driverFactory._startChromeDriver())
    })
    it('should start selenium when the selenium option is set', function () {
      this.driverFactory._startSelenium = td.function()
      this.driverFactory.webdriverHubImpl = 'selenium'

      this.driverFactory._startWebdriverHub()

      td.verify(this.driverFactory._startSelenium())
    })
    it('should throw an error when the webdriver hub impl is not supported', function () {
      this.driverFactory.webdriverHubImpl = 'wtf'
      expect(() => this.driverFactory._startWebdriverHub()).to.throw('wtf is not supported')
    })
  })
  describe('_startChromeDriver', function () {
    beforeEach(function () {
      this.driverFactory._startLongRunningProcess = td.function()
      this.chromedriver.path = 'chromedriver/path'
      this.driverFactory.port = 1234
    })
    it('should start a long running process', function () {
      this.driverFactory._startChromeDriver()

      td.verify(this.driverFactory._startLongRunningProcess({
        executablePath: 'chromedriver/path',
        executableArgs: ['--url-base=wd/hub', '--port=1234'],
        waitForMessage: 'Only local connections are allowed.',
        waitForTimeout: 5000
      }))
    })
    it('should return the process', function () {
      td.when(this.driverFactory._startLongRunningProcess(td.matchers.anything())).thenReturn('proc')

      const proc = this.driverFactory._startChromeDriver()

      expect(proc).to.equal('proc')
    })
  })
  describe('_startSelenium', function () {
    it.skip('should ', function () {
      throw new Error('Not implemented')
    })
  })
  describe('_startLongRunningProcess', function () {
    beforeEach(function () {
      this.driverFactory._startLongRunningProcess({
        executablePath: 'some/path',
        executableArgs: ['an', 'arg'],
        waitForMessage: 'A lovely message',
        waitForTimeout: 4567
      })
    })
    it('should spawn a synchronous forker using the same environment node', function () {
      td.verify(this.childProcess.spawnSync(
        process.argv[0], [
          `${__dirname}/utils/forker-script.js`,
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything()
        ],
        td.matchers.anything()
      ))
    })
    it('should pass the executable path', function () {
      td.verify(this.childProcess.spawnSync(
        td.matchers.anything(), [
          td.matchers.anything(),
          'some/path',
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything()
        ],
        td.matchers.anything()
      ))
    })
    it('should stringify the executable args', function () {
      td.verify(this.childProcess.spawnSync(
        td.matchers.anything(), [
          td.matchers.anything(),
          td.matchers.anything(),
          JSON.stringify(['an', 'arg']),
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything()
        ],
        td.matchers.anything()
      ))
    })
    it('should pass the parent pid', function () {
      td.verify(this.childProcess.spawnSync(
        td.matchers.anything(), [
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          process.pid,
          td.matchers.anything(),
          td.matchers.anything()
        ],
        td.matchers.anything()
      ))
    })
    it('should pass the waitFor message and timeout', function () {
      td.verify(this.childProcess.spawnSync(
        td.matchers.anything(), [
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          'A lovely message',
          4567
        ],
        td.matchers.anything()
      ))
    })
    it('should inherit the stdio', function () {
      td.verify(this.childProcess.spawnSync(
        td.matchers.anything(), [
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything(),
          td.matchers.anything()
        ],
        {stdio: 'inherit'}
      ))
    })
  })
  describe('_startDriver', function () {
    it('should create a new remote with the host, port and desired capabilities', function () {
      this.driverFactory.host = '1.2.3.4'
      this.driverFactory.port = 1234
      this.driverFactory.desiredCapabilities = {'some': 'capability'}

      this.driverFactory._startDriver()

      td.verify(this.webdriverio.remote({
        host: '1.2.3.4',
        port: 1234,
        desiredCapabilities: {'some': 'capability'}
      }))
    })
  })
})
