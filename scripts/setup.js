#!/usr/bin/env node
const packageJson = require('../package.json')
const exec = require('./lib/exec')
exec(`npm install --quite`)
exec(`npm run transpile  --quite`)
exec(`cd ${process.cwd()}/${packageJson.chimpDir} && npm i --quite`)
if (process.env.CIRCLECI) {
  exec(`cd ${process.cwd()}/${packageJson.distDir} && sudo npm link --quite`)
} else {
  exec(`cd ${process.cwd()}/${packageJson.distDir} && npm link --quite`)
}
exec(`cd ${process.cwd()}/${packageJson.distDir} && npm i --quite`)
exec(`cd ${process.cwd()}/${packageJson.testProjectDir} && npm i --quite`)
