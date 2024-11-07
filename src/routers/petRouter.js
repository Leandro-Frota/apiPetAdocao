import { Router } from "express";
import { PetController } from "../controllers/PetController.js";

const petRouters = Router()
const petController = new PetController()

petRouters.get('/',petController.getPets)
petRouters.post('/',petController.registerPet)
petRouters.get('/:id',petController.getPetById)
petRouters.put('/:id',petController.updatePet)
petRouters.delete('/:id',petController.deletePet)


export {petRouters}