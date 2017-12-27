#!/usr/bin/env node
const packageJson = require('../package.json')
const exec = require('./lib/exec')

const lintResultCode = exec(`npm run lint`).code
if (lintResultCode !== 0) {
  console.error('Linting Failed')
  process.exit(1)
}

const chimpTestsResultCode = exec(`cd ${process.cwd()}/${packageJson.chimpDir} && npm test`).code
if (chimpTestsResultCode !== 0) {
  console.error('Chimp Tests Failed')
  process.exit(1)
}

['cucumber', 'mocha', 'jest', 'jasmine', 'ava'].forEach((framework) => {
  const exitCode = exec(`cd ${process.cwd()}/${packageJson.testProjectDir} && npm run ${framework}`).code
  if (exitCode !== 0) {
    console.error(`${framework} Tests Failed`)
    process.exit(1)
  }
  exec(`sleep 1`)
})
