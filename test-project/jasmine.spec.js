import driver from 'chimp/driver'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000

describe('The Xolv.io Website', function () {
  it('should have a title', async function () {
    await driver.url('http://xolv.io')

    const title = await driver.getTitle()

    expect(title).toEqual('Xolv.io')
  })
})
