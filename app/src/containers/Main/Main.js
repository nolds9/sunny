import React, { Component } from 'react'
import { Navigation } from '../../components'
import { container, innerContainer } from './styles'

class Main extends Component {
  render(){
    return (
      <div style={container}>
        <Navigation isAuthed={true} />
        <div style={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
