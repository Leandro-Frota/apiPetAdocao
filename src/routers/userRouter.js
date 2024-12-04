import { Router } from "express";
import { UserController } from "../controllers/userController.js";


const userRouters = Router()
const userController = new UserController

userRouters.post('/',userController.registerUser)
userRouters.get('/',userController.getUser)
userRouters.get('/:id',userController.getUserById)
userRouters.put('/:id',userController.updateUser)
userRouters.delete('/:id',userController.deleteUser)

export {userRouters}


