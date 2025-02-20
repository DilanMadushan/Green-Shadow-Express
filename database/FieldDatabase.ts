import { PrismaClient } from "@prisma/client";

const fieldClient = new PrismaClient().field;

export const getAllFields = async () => {
    try{
        const allFields = await fieldClient.findMany();
        return allFields;
    }catch(e){
        console.log(e);
        
    } 
}   