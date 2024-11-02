import { prismaClient } from "../database/PrismaClient.js";

export class adoptPetController {
    async getAdopter(req,res){
        try{
            const adopter = await prismaClient.adopter.findMany()
            return res.status(200).json(adopter)
       }catch(error){
            return res.status(500).json({error: error.message})

       }
    }
    async registerAdopter(req,res) {
        const {id, name, email, phone, address} = req.body

        

        try{
            const adopter = await prismaClient.adopter.create({
                data:{
                    id, name, email, phone, address
                }
            });
            return res.status(201).send("Adopter registered succesfully").json(pet);
        } catch(error){
            return res.status(500).json({error: error.message});

       }
    } 
}