import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Blog from './../Blog'
import Design from './Design'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/blog' component={Blog}/>
    <Route path='/design' component={Design}/>
  </Switch>
)
export default Router