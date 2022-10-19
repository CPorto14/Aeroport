import { Router } from "express"
import {getSilla} from "../controllers/silla.controllers"

const router= Router()

router.get('/silla',getSilla)



export default router