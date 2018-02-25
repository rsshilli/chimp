import React from 'react'

export default class RocketLaunchButton extends React.Component {
  constructor ({handleClick}) {
    super()
    this.handleClick = handleClick
  }

  doSomething () {

  }

  startLaunchSequence() {

  }

  render () {
    return (
      <input type="button" onClick={this.handleClick}/>
    )
  }
}
