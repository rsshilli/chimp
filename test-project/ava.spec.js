import test from 'ava'
import driver from 'chimp/driver'

test(async t => {
  await driver.url('http://xolv.io')

  t.is(await driver.getTitle(), 'Xolv.io')
})
