import React from 'react'
import { Router, hashHistory, IndexRoute } from 'react-router'
import { Main, HomeContainer } from '../containers'

const routes = (
  <Router history={hashHistory}>
    <Router path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
)

export default routes
