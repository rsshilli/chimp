import browser from '../browser'
import {beforeHook, afterHook} from '../hooks'

before(beforeHook(browser, __filename))
after(afterHook(browser))

export default browser
