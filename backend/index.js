import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize())



mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    const PORT = process.env.PORT || 5556
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
