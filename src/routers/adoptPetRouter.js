import { Router } from "express";
import { adoptPetController } from "../controllers/adoptPetController.js";
import { verifyAutentication, verifyPermission } from "../auth/authMiddleware.js";

const adoptPetRouters = Router()
const adoptController = new adoptPetController()

adoptPetRouters.get('/', verifyAutentication, adoptController.getAdopter )
adoptPetRouters.post('/',verifyPermission(['EMPLOYEE','MANAGER']), adoptController.registerAdopter )
adoptPetRouters.get('/:id',verifyAutentication, adoptController.getAdopterById )
adoptPetRouters.put('/:id',verifyPermission(['EMPLOYEE','MANAGER']), adoptController.updateAdopter )
adoptPetRouters.delete('/:id',verifyPermission(['EMPLOYEE','MANAGER']), adoptController.deleteAdopterById )

export {adoptPetRouters}