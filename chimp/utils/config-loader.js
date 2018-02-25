export default class ConfigLoader {
  static load () {
    return require('../default-config').default
  }
}
