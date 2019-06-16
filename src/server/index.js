import express from 'express'
import baseRouter from './routers/baseRouter'
import peolpleRouter from './routers/peopleRouter'
const app = express()
const port = 3000

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
  console.log(`Time: ${Date.now()}, path: ${req.url}`)
  next()
})

// Serve static files
app.use('/static', express.static('static'))

app.use('/people', peolpleRouter)

app.use('/', baseRouter)

console.log('Dev server listening on port: ', port)
app.listen(port)
