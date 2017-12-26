#!/usr/bin/env node
const packageJson = require('../package.json')
const exec = require('./lib/exec')

const lintResultCode = exec(`npm run lint`)

const chimpTestsResultCode = exec(`cd ${process.cwd()}/${packageJson.chimpDir} && npm test`).code
const testProjectTestsResultCode = exec(`cd ${process.cwd()}/${packageJson.testProjectDir} && npm test`).code
if (lintResultCode === 0 && chimpTestsResultCode === 0 && testProjectTestsResultCode === 0) {
  process.exit(chimpTestsResultCode)
} else {
  process.exit(1)
}
