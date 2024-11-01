import { prismaClient } from "../database/PrismaClient.js";

export class apotPetController {
    async getAdopter(req,res){
        try{
            const adopter = await prismaClient.adopter.findMany()
            return res.status(200).json(adopter)
       }catch(error){
            return res.status(500).json({error: error.message})

       }
    }
}