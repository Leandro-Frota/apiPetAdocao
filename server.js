import express from 'express'
import { router } from './src/routers/index.js'



const app = express()

const PORT = 3001

app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
    console.log('Running server')
})