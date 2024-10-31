import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

try{
    prismaClient.$connect()
    console.log('Postgres connected succesfully')
}catch(error){
    console.log('Error connecting to Postrgres', error.message)
    process.exit(1)
}


export { prismaClient }