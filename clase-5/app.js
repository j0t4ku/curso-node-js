import express, { json } from 'express'
import { createMovieRouter } from './routes/movies.js'
import { corsMiddlewares } from './middlewares/cors.js'
import 'dotenv/config.js'

// leer un json
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json'))

export const createApp = ({ movieModel }) => {
  const app = express()

  app.use(json())

  app.disable('x-powered-by')

  app.use(corsMiddlewares())

  app.use('/movies', createMovieRouter({ movieModel }))

  // app.options('/movies/:id', (req, res) => {
  //   const origin = req.header('origin')
  //   if (ACEPTED_ORIGINS.includes(origin) || !origin) {
  //     res.header('Access-Control-Allow-Origin', origin)
  //     res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  //   }
  //   res.send(200)
  // })

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
