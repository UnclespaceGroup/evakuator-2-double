// packages
import React from 'react'
import { Route, Switch } from 'react-router'
import PageHomeDesktop from './PageHome/mobile/PageHomeMobile'
import { PAGE_HOME } from '../constants/ROUTES'
// import { Switch } from 'react-router-dom'

const RoutesMobile = () => (
  <Switch>
    <Route component={PageHomeDesktop}
      exact
      path={PAGE_HOME}
    />
  </Switch>
)

export default RoutesMobile
