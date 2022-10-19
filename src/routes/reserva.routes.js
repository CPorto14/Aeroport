import { Router } from "express"
import {getReserva} from "../controllers/reserva.controllers"

const router= Router()

router.get('/Reserva',getReserva)

router.post('/Reserva',)

router.delete('/Reserva',)

//router.update('/Reserva',) averiguar como hacer update



export default router