import AbstractElement from '../abstract-element'

export default class EnzymeElement extends AbstractElement {
  constructor ({wrapper, selector}) {
    super()
    this.wrapper = wrapper
    this.selector = selector
  }

  async click () {
    this.wrapper.find(this.selector).first().simulate('click')
  }
}
