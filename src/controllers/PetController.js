import { prismaClient } from "../database/PrismaClient.js";

export class PetController {
    async getPets (req,res){
       try{
            const pets = await prismaClient.pets.findMany()
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
            return res.status(201).send("Pet registered succesfully").json(pet);
        } catch(error){
            return res.status(500).json({error: error.message});

       }
    } 
    async getPetById (req, res){
        const {id} = req.params

        const getPetDelete = await prismaClient.pets.findMany({
            where: {id}
        })

        if(getPetDelete){
            return res.status(404).send("Pet not found")
        }

        try{
            const pet = await prismaClient.pets.findMany({
                where : {id}
            })
            return res.status(500).json(pet)
        }catch(error){  
            return res.status(500).json({error: error.message});

        }
    }
    async updatePet (req,res){
        const {id} = req.params
        const{name,species,dateBorn,description, status} = req.body

        const getPetDelete = await prismaClient.pets.findMany({
            where: {id}
        })

        if(getPetDelete){
            return res.status(404).send("Pet not found")
        }

        try{
            const pet = await prismaClient.pets.update({
                data:{
                    name,species,dateBorn,description, status
                },
                where:{id}

            })
            return res.status(200).send("Pet update succesfully").json(pet)
        }catch(error){
            return res.status(500).json({error: error.message});
        }
    }
    async deletePet (req,res){
        const {id} = req.params
        const getPetDelete = await prismaClient.pets.findMany({
            where: {id}
        })

        if(getPetDelete){
            return res.status(404).send("Pet not found")
        }

                
        try{
            await prismaClient.pets.delete({
                where: {id}
            })
            return res.status(200).send('Pet deleted')
        }catch(error){
            return res.status(500).json({ error: error.message });
        }
    }

}