import { prismaClient } from "../database/PrismaClient.js";
import bcrypt from "bcryptjs"


export class UserController {
    async registerUser(req,res){
        const{name,email,phone,password,profile} = req.body

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
}

