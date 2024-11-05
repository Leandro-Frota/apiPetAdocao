import { prismaClient } from "../database/PrismaClient.js";

export class AdoptionProcessController{
async getProcessAdopt(req,res){
     try{
          const adoptionProcess = await prismaClient.adoptionProcess.findMany()
          return res.status(200).json(adoptionProcess)
     }catch(error){
          return res.status(500).send("Adoption Process not registered")
     }
     
}
}