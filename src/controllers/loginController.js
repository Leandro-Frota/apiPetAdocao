import { prismaClient } from "../database/PrismaClient.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


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

                return res.status(401).json({error: "Usuario ou senha inválido"})

            }

            const payload = {id: user.id, name: user.name, perfil: user.profile}
            const token = jwt.sign(payload,process.env.SECRET_JWT,{expiresIn:'2h'})

            return res.status(200).json({data:payload, token:token})
        }catch(error){

            return res.status(500).json({error: error.message})

        }
    }
}