import { Router} from "express";
import { AdoptionProcessController } from "../controllers/adoptionProcessController.js";
import { verifyAutentication, verifyPermission } from "../auth/authMiddleware.js";

const adoptionProcessRouter = Router()
const adoptionProcessController = new AdoptionProcessController()

adoptionProcessRouter.get('/',verifyAutentication,adoptionProcessController.getProcessAdopt)
adoptionProcessRouter.post('/',verifyPermission(['EMPLOYEE','MANAGER']),adoptionProcessController.registerAdoptionProcess)
adoptionProcessRouter.get('/:id',verifyAutentication,adoptionProcessController.getProcessAdoptById)
adoptionProcessRouter.put('/:id',verifyPermission(['EMPLOYEE','MANAGER']),adoptionProcessController.updateAdoptionProcess)
adoptionProcessRouter.delete('/:id',verifyPermission(['EMPLOYEE','MANAGER']),adoptionProcessController.deleteAdoptionProcess)


export{adoptionProcessRouter}

