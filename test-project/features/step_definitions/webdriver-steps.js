import {When, Then} from 'cucumber'
import assert from 'assert'
import driver from 'chimp/driver'

When('I use the driver to navigate to a site like {url}', async function (url) {
  await driver.url(url)
})

Then('I see assert on things like it\'s title like {actualTitle}', async function (expectedTitle) {
  const actualTitle = await driver.getTitle()
  assert.equal(expectedTitle, actualTitle)
})
