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
        const {name, email, phone, address} = req.body
             
        try{
            const adopter = await prismaClient.adopter.create({
                data:{
                    name, email, phone, address
                }
            });
            return res.status(201).send("Adopter registered succesfully");
        } catch(error){
            return res.status(500).json({error: error.message});

       }
    } 
    async getAdopterById (req, res){
        const {id} = req.params
       
        const getAdopter = await prismaClient.adopter.findUnique({
            where: {id}
        })

        if(!getAdopter){
            return res.status(404).send("Adopter not found")
        }
      
        try{
            const adopter = await prismaClient.adopter.findUnique({
                where : {id}
            })
            return res.status(500).json(adopter)
        }catch(error){  
            return res.status(500).json({error: error.message});

        }
    }
    async updateAdopter(req,res) {
        const {id} = req.params
        const {name, email, phone, address} = req.body

        const getAdopter = await prismaClient.adopter.findUnique({
            where: {id}
        })

        if(!getAdopter){
            return res.status(404).send("Adopter not found")
        }
             
        try{
            await prismaClient.adopter.update({
                data:{
                    name, email, phone, address
                },
                where:{id}
            });
            return res.status(201).send("Adopter updater");
        } catch(error){
            return res.status(500).json({error: error.message});

       }
    } 
    async deleteAdopterById (req, res){
        const {id} = req.params
       
        const getAdopter = await prismaClient.adopter.findUnique({
            where: {id}
        })

        if(!getAdopter){
            return res.status(404).send("Adopter not found")
        }
      
        try{
            await prismaClient.adopter.delete({
                where : {id}
            })
            return res.status(200).send("Adopter deleted")
        }catch(error){  
            return res.status(500).json({error: error.message});

        }
    }
}