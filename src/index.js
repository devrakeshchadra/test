import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App2 from './home'
import Users from './home'
import Contact from './loginpage'
const routing = (
  <Router>
    <div>
      <Route path="/" component={App2} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))