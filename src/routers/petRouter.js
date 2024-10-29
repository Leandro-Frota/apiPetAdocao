import { Router } from "express";

const petRouters = Router()

petRouters.get('/',(req,res)=>{
    console.log('lista de pets enviadas')
    res.send('lista enviada')
})

export {petRouters}