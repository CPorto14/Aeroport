import { Router } from "express"
import {createNewReserva, deleteReservaById, getReserva, getReservaById, getTotalReserva, updateReservaById} from "../controllers/reserva.controllers"

const router= Router()

router.get('/Reserva',getReserva)

router.get('/Reserva/count',getTotalReserva)

router.post('/Reserva',createNewReserva)

router.get('/Reserva/:idReserva',getReservaById)

router.delete('/Reserva/:idReserva',deleteReservaById)

router.put('/Reserva/:idReserva',updateReservaById)


export default router