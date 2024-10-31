import { prismaClient } from "../database/PrismaClient.js";

export class PetController {
    async getPets (req,res){
       try{
            const pets = prismaClient.petAdocao.findMany()
            return res.status(200).json(pets)
       }catch(error){
            return res.status(500).json({error: error.message})

       }
    }
    async registerPet(req,res) {
        const {name,species,dateBorn,description, status} = req.body

        try{
            const pet = await prismaClient.pets.create({
                data:{
                    name,species,dateBorn,description, status
                }
            });
            return res.status(201).json(pet);
        } catch(error){
            return res.status(500).json({error: error.message});

       }
    } 

}