import express from 'express'
import config from './config'
import sillaRoute from './routes/silla.routes'
import reservaRoute from './routes/reserva.routes'
import clienteRoute from './routes/clientes.routes'
import cors from 'cors';
const app = express()


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//settings
app.set("port", config.port)

//middleware

app.use(express.json(), cors(corsOptions))
app.use(express.urlencoded({ extended: false }), cors(corsOptions))

app.use(sillaRoute, cors(corsOptions))
app.use(reservaRoute, cors(corsOptions))
app.use(clienteRoute, cors(corsOptions))

export default app