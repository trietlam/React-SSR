/*
# Handle initnial server side rendering
*/
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '~/client/reducers/rootReducer'
import App from '~/client/App'

// function handleRender(req, res){
export const handleRender = (req, res) => {
  // Material-ui CSS for server side to prevent "flicks" on first load
  const sheets = new ServerStyleSheets()

  // Create a new Redux store instance
  const store = createStore(rootReducer)

  // Render the component to a string
  const html = renderToString(
    sheets.collect(
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    )
  )

  // Grab the CSS
  const css = sheets.toString()

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState, css))
}

const renderFullPage = (html, preloadedState, css) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React-SSR</title>
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // very basic encode html tag
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}
