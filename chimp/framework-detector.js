export default class FrameworkDetector {
  static isMocha () {
    return process.env.LOADED_MOCHA_OPTS !== undefined
  }

  static isAva () {
    return process.env.AVA_PATH !== undefined
  }

  static isJest () {
    return require.requireActual !== undefined &&
      global.xit !== undefined &&
      global.fit !== undefined
  }

  static isJasmine () {
    return require.requireActual === undefined &&
      global.xit !== undefined &&
      global.fit !== undefined
  }

  static isCucumber () {
    try {
      require('cucumber')
      return true
    } catch (e) {
      return false
    }
  }
}
