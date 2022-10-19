import express from 'express'
import config from './config'
import sillaRoute from './routes/silla.routes'
import reservaRoute from './routes/reserva.routes'

const app = express()

//settings
app.set("port", config.port)

//middleware

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use(sillaRoute)
app.use(reservaRoute)

export default app