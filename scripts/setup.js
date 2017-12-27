#!/usr/bin/env node
const packageJson = require('../package.json')
const exec = require('./lib/exec')

exec(`npm run transpile`)
if (!process.env.CIRCLECI) {
  exec(`cd ${process.cwd()}/${packageJson.chimpDir} && npm i`)
}
exec(`cd ${process.cwd()}/${packageJson.distDir} && ${process.env.CIRCLECI ? 'sudo' : ''} npm link`)
exec(`cd ${process.cwd()}/${packageJson.distDir} && npm i`, {async: true})
exec(`cd ${process.cwd()}/${packageJson.testProjectDir} && npm i`, {async: true})
