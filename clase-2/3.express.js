const express = require('express')
const dittoJSON = require('./pokemon/ditto.js')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

app.use(express.json())

// Middleware
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)

//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.setHeader('Content-Type', 'aplication/json; charset/utf-8')
  return res.end(JSON.stringify(dittoJSON))
})

app.post('/pokemon', (req, res) => {
  res.status(201).send(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log('server listening on port ', PORT)
})
