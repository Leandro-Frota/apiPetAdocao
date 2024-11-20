import { Router } from "express";
import { petRouters } from "./petRouter.js";
import { adoptionProcessRouter} from "./adoptionProcessRouter.js";
import {adoptPetRouters} from "./adoptPetRouter.js"
import { userRouters } from "./userRouter.js";


const router = Router()

router.use('/pet', petRouters)
router.use('/adopt', adoptPetRouters )
router.use('/adoptionProcess',adoptionProcessRouter)
router.use('/user', userRouters)

export {router}