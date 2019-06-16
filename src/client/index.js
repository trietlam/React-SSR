import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers/rootReducer'
import rootEpic from './epics'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epics = createEpicMiddleware()
const middlewares = composeEnhancers(applyMiddleware(epics))

const store = createStore(rootReducer, preloadedState, middlewares)
epics.run(rootEpic)

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
