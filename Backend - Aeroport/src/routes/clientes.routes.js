import { Router } from "express"
import { createNewClientes, deleteClientesById, getClientes, getClientesById, getTotalClientes, updateClientesById } from "../controllers/clientes.controllers"

const router= Router();
 
export default router

router.get('/cliente',getClientes)

router.get('/cliente/count',getTotalClientes)

router.post('/cliente',createNewClientes)

router.get('/cliente/:Cedula',getClientesById)

router.delete('/cliente/:Cedula',deleteClientesById)

router.put('/cliente/:Cedula',updateClientesById)