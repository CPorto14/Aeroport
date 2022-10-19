import { Router } from "express"
import {getSilla,getSillaById} from "../controllers/silla.controllers"

const router= Router()

router.get('/silla',getSilla)

router.get('/silla/:idSilla',getSillaById)



export default router