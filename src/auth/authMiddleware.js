import jwt from 'jsonwebtoken'

export function verifyAutentication(req,res,next){
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json("Token not found")
    }

    const token = authorization.replace('Bearer','').trim()

    try{
        const {id} = jwt.verify(token,process.env.SECRET_JWT)

        if(!id){
            return res.status(403).json({error: "Não autorizado"})
        }
        next();
    }catch(error){
        return res.status(500).json({error: "Token invalido"})
    }
}

    export function verifyPermission(allowedProfile){
        return (req,res,next)=>{
            const {authorization} = req.headers

        if(!authorization){
            return res.status(401).json("Token not found")
        }

        const token = authorization.replace('Bearer','').trim()
        console.log(token)

        try{

            const decoded = jwt.verify(token,process.env.SECRET_JWT)

            console.log(decoded)    

            const {profile} = decoded
            console.log(profile)

            if(!allowedProfile.includes(profile)){
                return res.status(403).json({error: "Não autorizado"})
            }
            next();
        }catch(error){
            // Identifica erros específicos do JWT
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: "Token expirado" });
            } else if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({ error: "Token inválido" });
            } else {
                return res.status(500).json({ error: "Erro interno no servidor" });
            }
        }
    }
    }