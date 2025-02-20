import { PrismaClient } from "@prisma/client";

const equipmentClient = new PrismaClient().equipment;

export const getAllEquipments = async () => {
    try{
        const allEquipments = await equipmentClient.findMany();
        return allEquipments;
    }catch(e){
        console.log(e);
    } 
}