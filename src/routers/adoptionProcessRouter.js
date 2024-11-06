import { Router} from "express";
import { AdoptionProcessController } from "../controllers/adoptionProcessController.js";

const adoptionProcessRouter = Router()
const adoptionProcessController = new AdoptionProcessController()

adoptionProcessRouter.get('/',adoptionProcessController.getProcessAdopt)
adoptionProcessRouter.post('/',adoptionProcessController.registerAdoptionProcess)
adoptionProcessRouter.get('/:id',adoptionProcessController.getProcessAdoptById)
adoptionProcessRouter.put('/:id',adoptionProcessController.updateAdoptionProcess)
adoptionProcessRouter.delete('/:id',adoptionProcessController.deleteAdoptionProcess)


export{adoptionProcessRouter}

