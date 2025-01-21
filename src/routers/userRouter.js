import { Router } from "express";
import { UserController } from "../controllers/userController.js";
import { verifyAutentication, verifyPermission } from "../auth/authMiddleware.js";


const userRouters = Router()
const userController = new UserController

userRouters.post('/',verifyPermission(['MANAGER']),userController.registerUser)
userRouters.get('/',verifyPermission(['MANAGER']),userController.getUser)
userRouters.get('/:id',verifyPermission(['MANAGER']),userController.getUserById)
userRouters.put('/:id',verifyPermission(['MANAGER']),userController.updateUser)
userRouters.delete('/:id',verifyPermission(['MANAGER']),userController.deleteUser)

export {userRouters}


