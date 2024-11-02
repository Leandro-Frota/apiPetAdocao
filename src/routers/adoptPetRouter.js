import { Router } from "express";
import { adoptPetController } from "../controllers/adoptPetController.js";

const adoptPetRouters = Router()
const adoptController = new adoptPetController()

adoptPetRouters.get('/', adoptController.getAdopter )
adoptPetRouters.post('/', adoptController.registerAdopter )

export {adoptPetRouters}