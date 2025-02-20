import { PrismaClient } from "@prisma/client";

const logClient = new PrismaClient().log;

export const getAllLogs = async () => {
    try{
        const allLogs = await logClient.findMany();
        return allLogs;
    }catch(e){
        console.log(e);
    } 
}