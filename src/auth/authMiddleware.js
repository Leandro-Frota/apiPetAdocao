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

    try{
        const {profile} = jwt.verify(token,process.env.SECRET_JWT)

        if(!allowedProfile.includes(profile)){
            return res.status(403).json({error: "Não autorizado"})
        }
        next();
    }catch(error){
        return res.status(500).json({error: "Token invalido"})
    }
}
}