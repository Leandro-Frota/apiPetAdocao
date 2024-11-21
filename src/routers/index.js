import { Router } from "express";
import { petRouters } from "./petRouter.js";
import { adoptionProcessRouter} from "./adoptionProcessRouter.js";
import {adoptPetRouters} from "./adoptPetRouter.js"
import { userRouters } from "./userRouter.js";
import { LoginController } from "../controllers/loginController.js";


const router = Router()
const loginController = new LoginController

router.use('/pet', petRouters)
router.use('/adopt', adoptPetRouters )
router.use('/adoptionProcess',adoptionProcessRouter)
router.use('/user', userRouters)
router.post('/login',loginController.login)

export {router}