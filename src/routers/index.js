import { Router } from "express";
import { petRouters } from "./petRouter.js";


const router = Router()

router.use('/pet', petRouters)

export {router}