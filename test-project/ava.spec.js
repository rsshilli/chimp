import test from 'ava'
import browser from 'chimp/ava/browser'

test(async t => {
  await browser.url('https://google.com/')

  t.is(await browser.getTitle(), 'Google')
})
