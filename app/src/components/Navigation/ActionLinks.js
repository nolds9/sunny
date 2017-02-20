import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { navContainerLi, link, navContainerUl } from './styles'


const ActionLinks = ({isAuthed}) => {
  return !!isAuthed
    ? <ul style={navContainerUl}>
        <li style={navContainerLi}><Link style={link} to='/share'>{'New Sunny'}</Link></li>
        <li style={navContainerLi}><Link style={link} to='/logout'>{'Log Out'}</Link></li>
      </ul>
    : <ul style={navContainerUl}>
        <li style={navContainerLi}><Link style={link} to='/'>{'Home'}</Link></li>
        <li style={navContainerLi}><Link style={link} to='/auth'>{'Authenticate'}</Link></li>
      </ul>
}

ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

export default ActionLinks
