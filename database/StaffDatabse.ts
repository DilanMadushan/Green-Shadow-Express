import { PrismaClient } from "@prisma/client";

const staffClient = new PrismaClient().staff;

export const getAllStaff = async () => {
    try{
        const allStaff = await staffClient.findMany();
        return allStaff;
    }catch(e){
        console.log(e);
    } 
}