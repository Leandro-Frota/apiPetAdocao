import { prismaClient } from "../database/PrismaClient.js"
import bcrypt from "bcryptjs"


export class LoginController{
    async login (req,res){
        const {email,password} = req.body

        try{
            const user = await prismaClient.user.findFirst({
                where :{email}
            })

            if(!user){
                return res.status(404).json({error: "Usuario não encontrado"});
            }
            const passwordValid = bcrypt.compareSync(password,user.password)

            if(!passwordValid){

                return res.statu(401).json({error: "Usuario invalido"})

            }
            return res.status(200).send("Usuario login ok")
        }catch(error){

            return res.status(500).json({error: error.message})

        }
    }
}