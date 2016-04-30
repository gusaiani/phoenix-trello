import { IndexRoute, Route } from 'react-router'
import React from 'react'
import MainLayout from '../layouts/main'
import RegistrationsNew from '../views/registrations/new'

export default function configRoutes(store) {
  <Route component={MainLayout}>
    <Route path="/" component={RegistrationsNew} />
  </Route>
}