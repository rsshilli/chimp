import Container from './container'
import ConfigLoader from '../utils/config-loader'
import EnzymeDriver from '../drivers/enzyme/enzyme-driver'
import PuppeteerDriver from '../drivers/pupeteer/puppeteer-driver'
import Types from './types'
import Drivers from './drivers'

function initRoot () {
  // - - - - - - - - - - - - - - - - - - - - -
  // CONFIG
  //
  const config = ConfigLoader.load()
  Container.set(Types.Config, config)

  // - - - - - - - - - - - - - - - - - - - - -
  // DRIVERS
  //
  Container.set(Drivers.EnzymeDriver, EnzymeDriver)
  Container.set(Drivers.PuppeteerDriver, PuppeteerDriver)
  Container.set(Types.Driver, Container.get(config.driver))
}

export {initRoot}
