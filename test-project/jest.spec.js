import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import RocketLaunchButton from './src/components/rocket-launch-button'
import RocketLaunchButtonCAPI from './src/components/rocket-launch-button-capi'

Enzyme.configure({adapter: new Adapter()})

describe('Button', () => {
  describe('render', () => {
    it('should click using the CAPI', () => {
      let clicked = false
      const myFunc = () => {
        clicked = true
      }

      const wrapper = shallow(<RocketLaunchButton handleClick={myFunc}/>)
      const rocketLaunchButtonCAPI = new RocketLaunchButtonCAPI({wrapper})

      rocketLaunchButtonCAPI.startLaunchSequence()

      expect(clicked).toBe(true)

      rocketLaunchButtonCAPI.doSomething()
    })
  })
})
