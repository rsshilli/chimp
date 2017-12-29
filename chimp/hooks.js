export function beforeHook (driver, filename) {
  return async function () {
    delete require.cache[filename]
    await driver.init()
  }
}

export function afterHook (driver) {
  return async function () {
    await driver.end()
  }
}
