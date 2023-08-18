import express, { Express } from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'

import database from './database'

import productsRoute from './routes/products'
;(async () => {
  const server: Express = express()
  const PORT = process.env.PORT || 4000
  dotenv.config()

  server.use(bodyParser.json())
  server.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
  server.use(express.urlencoded({ extended: true }))
  server.use(compression())
  server.use(express.json())

  server.use('/api', productsRoute)

  try {
    await database
    server.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}`)
    )
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
})()
