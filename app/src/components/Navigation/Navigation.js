import React, {PropTypes} from 'react'
import NavLinks from './NavLinks'
import ActionLinks from './ActionLinks'
import { container, navContainer } from './styles'

const Navigation = ({isAuthed}) => {
  return (
    <div style={container}>
      <nav style={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

export default Navigation
