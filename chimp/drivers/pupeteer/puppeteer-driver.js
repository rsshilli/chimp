import AbstractDriver from '../abstract-driver'
import PuppeteerElement from './puppeteer-element'

export default class PuppeteerDriver extends AbstractDriver {
  constructor ({binding}) {
    super()
  }

  goto () {
    // TODO
  }

  getElement (selector) {
    return new PuppeteerElement({selector})
  }
}
