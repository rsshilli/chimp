import {initRoot} from './di/composition-root'
import CAPI from './capi/capi'
import Drivers from './di/drivers'

initRoot()

export {CAPI, Drivers}
