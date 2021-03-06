import './index.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import store, { history } from './store'

import App from './components/App'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'

const router = (
  <Provider store={store}>
    <Router history={history} >
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
