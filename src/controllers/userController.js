import { prismaClient } from "../database/PrismaClient.js";


export class UserController {
    async registerUser(req,res){
        const{name,email,phone,password,profile} = req.body

      try{
        const user = await prismaClient.user.create({
           data:{ name,email,phone,password,profile}
        })
        return res.status(200).send(user)
      } catch(error){
        return res.status(500).json({error: error.message})
      } 
    }
}

