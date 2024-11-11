import { prismaClient } from "../database/PrismaClient.js";

export class PetController {
    async getPets (req,res){
        const {status,species,ageMin,ageMax} = req.query
        try{
            const pets = await prismaClient.pets.findMany({
                where : {
                    AND:[
                         status? {status:status} : null,
                         species? {species:species} : null,
                         (ageMin&&ageMax)?{age:{gte:parseInt(ageMin),lte:parseInt(ageMax)}}:null
                        
                        ].filter(condition => condition !== null)},
                select:{
                    name:true,
                    species:true,
                    age:true,
                    description:true,
                    status: true
                }
            })      
     

             if (pets.length ===0) {
            return res.status(404).send('Pet not found'); // Retorna 404 se o pet não for encontrado
        }      
           
            return res.status(200).json(pets)
        }catch(error){ 
            console.error(error) 
            return res.status(500).json({ error:error.message});

        }
    }
    async registerPet(req,res) {
        const {name,species,dateBorn,description, status} = req.body
        const dateNow = new Date()
        const born = new Date(dateBorn)

        const ageNow = Math.floor((dateNow - born) / (1000 * 60 * 60 * 24 * 30.44));
     

        try{
            const pet = await prismaClient.pets.create({
                data:{
                    name,species,dateBorn,description, status,age:ageNow
                }
            });
            return res.status(201).json({message:"Pet registered succesfully",pet});
        } catch(error){
            return res.status(500).json({error: error.message});

       }
    } 
    async getPetById (req, res){
        const {id} = req.params

        const getPet = await prismaClient.pets.findUnique({
            where : {id}
        })
        if (!getPet) {
            return res.status(404).send('Pet not found'); // Retorna 404 se o pet não for encontrado
        }
       
        try{
            const pet = await prismaClient.pets.findUnique({
                where : {id}
            })
           
            return res.status(200).json(pet)
        }catch(error){ 
            console.error(error) 
            return res.status(500).json({ error:error.message});

        }
    }
    async updatePet (req,res){
        const {id} = req.params
        const{name,species,dateBorn,description, status} = req.body

        //Atualizar idade 
        const dateNow = new Date()
        const born = new Date(dateBorn)
        const ageNow = Math.floor((dateNow - born) / (1000 * 60 * 60 * 24 * 30.44)); //meses


        const getPet = await prismaClient.pets.findUnique({
            where : {id}
        })
        if (!getPet) {
            return res.status(404).send('Pet not found'); // Retorna 404 se o pet não for encontrado
        }

        try{           
            const pet = await prismaClient.pets.update({
                data:{
                    name,species,dateBorn,description, status,age:ageNow
                },
                where:{id}
            })          
            return res.status(200).send("Pet update succesfully");
        }catch(error){
            return res.status(500).json({error: error.message});
        }
    }
    async deletePet (req,res){
        const {id} = req.params
        
        const getPet = await prismaClient.pets.findUnique({
            where: {id}
        })
        if(!getPet){
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