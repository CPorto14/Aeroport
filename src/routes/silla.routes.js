import { Router } from "express"
import {getSilla,getSillaById, postTotalSilla} from "../controllers/silla.controllers"

const router= Router()

router.get('/silla',getSilla)

router.get('/silla/:idSilla',getSillaById)

router.post('/silla/count',postTotalSilla) //no da con get funciona con post



export default router