import { Router } from "express";
import { petRouters } from "./petRouter.js";
import { adoptPetRouters } from "./adoptPetRouter.js";


const router = Router()

router.use('/pet', petRouters)
router.use('/adopt', adoptPetRouters )

export {router}