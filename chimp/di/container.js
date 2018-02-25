export default class Container {
  constructor () {
    this.container = {}
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new Container()
    }
    return this.instance
  }

  static get (type) {
    return Container.getInstance().container[type]
  }

  static set (type, instance) {
    Container.getInstance().container[type] = instance
  }
}