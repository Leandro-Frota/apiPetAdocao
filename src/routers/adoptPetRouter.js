import { Router } from "express";
import { adoptPetController } from "../controllers/adoptPetController.js";
import { verifyAutentication, verifyPermission } from "../auth/authMiddleware.js";

const adoptPetRouters = Router()
const adoptController = new adoptPetController()

adoptPetRouters.get('/', verifyAutentication, adoptController.getAdopter )
adoptPetRouters.post('/',verifyPermission(['EMPLOYEE']), adoptController.registerAdopter )
adoptPetRouters.get('/:id', adoptController.getAdopterById )
adoptPetRouters.put('/:id', adoptController.updateAdopter )
adoptPetRouters.delete('/:id', adoptController.deleteAdopterById )

export {adoptPetRouters}