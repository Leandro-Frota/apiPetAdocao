
export class PetController {
    getPets (req,res){
        console.log('lista de pets enviadas')
        res.send('lista enviada')
    }
}