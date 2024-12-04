import { prismaClient } from "../database/PrismaClient.js";
import bcrypt from "bcryptjs"


export class UserController {
    async registerUser(req,res){
        const{name,email,phone,password,profile} = req.body

        const user = await prismaClient.user.findUnique({where:{email}})
        if(user){
          return res.status(401).send('user already exists')
        }

      try{
        const passwordHash = bcrypt.hashSync(password,10)
        const user = await prismaClient.user.create({
           data:{ name,email,phone,password:passwordHash,profile}
          
        })
        return res.status(200).send(user)
      } catch(error){
        return res.status(500).json({error: error.message})
      } 
    }
    async getUser (req,res){
    
      try{
        const user = await prismaClient.user.findMany()
        return res.status(200).json(user)
      }catch(error){
        return res.status(500).send("User not found")
      }
    
    }
    async getUserById(req,res){
      const {id} = req.params

      const user = await prismaClient.user.findFirst({where:{id}})
      if(!user){
        return res.status(404).send("User not found")
      }

      try{
        const user = await prismaClient.user.findFirst({where:{id}})
        return res.status(200).json(user)
      }catch(error){
        return res.status(500).json({error: error.message})
      }
    }
    async updateUser(req,res){
      const {id} = req.params
      const{name,email,phone,password,profile} = req.body

      const user = await prismaClient.user.findMany({where:{id}})
      if(!user){
        return res.status(404).send("User not found")
      }

      try{
        const passwordHash = bcrypt.hashSync(password,10)
        const user = await prismaClient.user.update({
          where:{id},
          data:{name,email,phone,password:passwordHash,profile},
          select:{name:true,email:true,phone:true,profile:true}
        })
        return res.status(201).send("User update succesfully")
      }catch(error){
        return res.status(500).json({error: error.message})
      }
    }
    async deleteUser(req,res){
      const {id} = req.params
      const user = await prismaClient.user.findUnique({where:{id}})
      if(!user){
        return res.status(404).send("User not found")
      }
      try{
        await prismaClient.user.delete({where:{id}})
        return res.status(200).send("User deleted sucesfully")
      }catch(error){
        return res.status(500).json({error: error.message})
      }
    }
    
}

