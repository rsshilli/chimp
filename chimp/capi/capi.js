import Container from '../di/container'
import Types from '../di/types'

export default class CAPI {
  constructor ({wrapper, selector}) {
    const binding = this.bindTo()

    const Driver = Container.get(Types.Driver)

    this.driver = new Driver({wrapper, binding, selector})
    // TODO put this CAPI into the container to use for deep binding
  }

  bindTo () {
    return false
  }
}

//
// // - -
// // USER CODE
// //
// class Auth extends React.Component {
//
//   constructor () {
//     super()
//     this.state = {
//       username: 'qwe',
//       password: 'qwe'
//     }
//   }
//
//   onChange = (e) => {
//     const state = this.state
//     state[e.target.name] = e.target.value
//     this.setState(state)
//   }
//
//   onSubmit = async (e) => {
//     e.preventDefault()
//     const {username, password} = this.state
//     await fetch.post('/login', {username, password})
//   }
//
//   render () {
//     return <form onSubmit={this.onSubmit}>
//       <input type="text" name="username" value={username} onChange={this.onChange}/>
//       <input type="password" name="password" value={password} onChange={this.onChange}/>
//       <button type="submit">Submit</button>
//     </form>
//   }
// }
//
// class MyEnzymeDriver extends EnzymeDriver {
//   drag (locator) {
//     const el = this.driver.getElement(locator)
//     el.mouseDown()
//     el.mouseMove(10, 40)
//     el.mouseUp()
//   }
// }
//
// class AuthAPI extends Chimp.API {
//   login () {
//     this.driver.getElement().click()
//   }
//
//   extension () {
//     this.driver.getElement().drag()
//   }
// }
//
//

describe('Auth', function () {
  describe('form', function () {
    it('Enzyme bind to API selector', function () {
      const wrapper = shallow(<Auth/>)
      const authAPI = new AuthAPI({wrapper})

      authAPI.login()
    })
    it('Enzyme override selector', function () {
      const wrapper = shallow(<Auth/>)
      const selector = '.nav .auth'
      const authAPI = new AuthAPI({wrapper, selector})

      authAPI.login()
    })
    it('Enzyme selector override', function () {
      const wrapper = shallow(<Auth/>)
      const authAPI = new AuthAPI({wrapper, selector})

      authAPI.login()
    })
    it('Enzyme selector override', function () {
      const app = mount(<App/>)
      const appAPI = new AppAPI({wrapper, selector})

      appAPI.login()
    })
    it('Puppeteer with CSS selector', function () {
      require(`chimp/driver`).navigateTo('http://somewhere.nice.com')
      const selector = '.nav-auth'
      const authAPI = new AuthAPI({selector})

      authAPI.login()
    })
    it('Puppeteer with React Component selector a single match', function () {
      require(`chimp/driver`).navigateTo('http://somewhere.nice.com')
      const selector = Auth
      const authAPI = new AuthAPI({selector})

      authAPI.login()
    })
    it('Puppeteer with React Component selector and multiple matches', function () {
      require(`chimp/driver`).navigateTo('http://somewhere.nice.com')
      const selector = Auth
      const authAPI = new AuthAPI({selector}).use('[data-capi="nav"]')

      authAPI.login()
    })
    it('Puppeteer with auto bind component navigation', function () {
      const appAPI = require(`chimp/driver`).autoBind('http://somewhere.nice.com')
      appAPI.authAPI.login()
    })
  })
})
//
//
//
