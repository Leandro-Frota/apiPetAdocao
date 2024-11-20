import { Router } from "express";
import { UserController } from "../controllers/userController.js";


const userRouters = Router()
const userController = new UserController

userRouters.use('/',userController.registerUser)

export {userRouters}


