import {CAPI} from 'chimp'

export default class RocketLaunchButtonCAPI extends CAPI {
  startLaunchSequence () {
    this.driver.getElement('input').click()
  }
}
