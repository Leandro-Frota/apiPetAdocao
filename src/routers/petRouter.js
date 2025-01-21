import { Router } from "express";
import { PetController } from "../controllers/PetController.js";
import { verifyAutentication, verifyPermission } from "../auth/authMiddleware.js";

const petRouters = Router()
const petController = new PetController()

petRouters.get('/',verifyAutentication,petController.getPets)
petRouters.post('/',verifyPermission(['EMPLOYEE','MANAGER']),petController.registerPet)
petRouters.get('/:id',petController.getPetById)
petRouters.put('/:id',verifyPermission(['EMPLOYEE','MANAGER']),petController.updatePet)
petRouters.delete('/:id',verifyPermission(['EMPLOYEE','MANAGER']),petController.deletePet)


export {petRouters}