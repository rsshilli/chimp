import assert from 'assert'
import driver from 'chimp/driver'

describe('The Xolv.io Website', function () {
  it('should have a title', async function () {
    await driver.url('http://xolv.io')

    const title = await driver.getTitle()

    assert.equal(title, 'Xolv.io')
  })
})
