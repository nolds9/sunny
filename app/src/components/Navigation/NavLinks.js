import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { navContainerLi, link, navContainerUl } from './styles'

const NavLinks = ({isAuthed}) => {
  return !!isAuthed
    ? <ul style={navContainerUl}>
        <li style={navContainerLi}>
          <Link style={link} to='/'>{'Home'}</Link>
        </li>
      </ul>
    : null
}

NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}



export default NavLinks
