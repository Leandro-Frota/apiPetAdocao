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
async registerAdoptionProcess(req,res){
     const {pet_id ,adopter_id,data_adocao} = req.body
    
     try{
          await prismaClient.adoptionProcess.create({
               data: {pet_id,adopter_id,data_adocao}
          })
           const newStatus = "adotado"
          await prismaClient.pets.update({
               data:{status:newStatus},
               where:{id:pet_id}
          })
          return res.status(200).send("Adoption Procces register succesfully")
     }catch(error){
          return res.status(500).json({error:error.message})
     }
}
     async getProcessAdoptById(req,res){
          const {id} = req.params

          const getProcessAdopt = await prismaClient.adoptionProcess.findUnique({
               where: {id}
          })

          if(!getProcessAdopt){
               return res.status(404).send("Procces not found")
          }

          try{
               const adoptionProcess = await prismaClient.adoptionProcess.findUnique({
                    where:{id}
               })
               return res.status(200).json(adoptionProcess)
          }catch(error){
               return res.status(500).send({error:error.message})
          }
          
     }
     async updateAdoptionProcess(req,res){
          const {id} = req.params
          const{pet_id ,adopter_id,data_adocao} = req.body

          const getProcessAdopt = await prismaClient.adoptionProcess.findUnique({
               where: {id}
          })

          if(!getProcessAdopt){
               return res.status(404).send("Adoption process not found")
          }

          try{
               await prismaClient.adoptionProcess.update({
                    data:{pet_id ,adopter_id,data_adocao},
                    where:{id}   
               })
               return res.status(200).send("Adoption process updated")
          }catch(error){
               return res.status(500).json({error: error.message})
          }
     }
     async deleteAdoptionProcess(req,res){
          const {id} = req.params
          
          const getProcessAdopt = await prismaClient.adoptionProcess.findUnique({
               where:{id}
          })

          if(!getProcessAdopt){
               return res.status(404).send("Adoption process not found")

          }

          try{
               await prismaClient.adoptionProcess.delete({
                    where:{id}
               })
               return res.status(200).send("Adoption deleted")
          }catch(error){
               return res.status(500).json({error: error.message})
          }
     }
}