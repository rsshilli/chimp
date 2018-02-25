import {beforeHook, afterHook} from './hooks'

describe('Hooks', function () {
  describe('beforeHook', function () {
    it('should prevent node from caching the provided filename module', async function () {
      const driver = {init: td.function()}
      td.when(driver.init()).thenResolve()
      require.cache['some/module/file.js'] = 'cached item'

      beforeHook(driver, 'some/module/file.js')()

      expect(require.cache['some/module/file.js']).to.equal(undefined)
    })
    it('should init the driver session', function () {
      const driver = {init: td.function()}
      td.when(driver.init()).thenResolve()

      beforeHook(driver)()

      td.verify(driver.init())
    })
  })
  describe('afterHook', function () {
    it('should end the driver session', function () {
      const driver = {end: td.function()}
      td.when(driver.end()).thenResolve()

      afterHook(driver)()

      td.verify(driver.end())
    })
  })
})
