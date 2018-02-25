import AbstractDriver from '../abstract-driver'
import EnzymeElement from './enzyme-element'

export default class EnzymeDriver extends AbstractDriver {

  constructor ({wrapper}) {
    super()
    this.wrapper = wrapper
  }

  goto () {
    throw new Error('Not Supported. The EnzymeDriver does not support the goto command. You should use Shallow or Mount instead.')
  }

  getElement (selector) {
    return new EnzymeElement({wrapper: this.wrapper, selector})
  }
}
