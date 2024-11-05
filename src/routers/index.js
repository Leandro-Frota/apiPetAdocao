import { Router } from "express";
import { petRouters } from "./petRouter.js";
import { adoptionProcessRouter} from "./adoptionProcessRouter.js";
import {adoptPetRouters} from "./adoptPetRouter.js"


const router = Router()

router.use('/pet', petRouters)
router.use('/adopt', adoptPetRouters )
router.use('/adoptionProcess',adoptionProcessRouter)

export {router}