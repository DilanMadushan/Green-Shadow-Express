import { PrismaClient } from "@prisma/client";
import EquipmentModel from "../models/EquipmentModel";

const equipmentClient = new PrismaClient().equipment;

export const getAllEquipments = async () => {
    try{
        const allEquipments = await equipmentClient.findMany();
        return allEquipments;
    }catch(e){
        console.log(e);
    } 
}

export const saveEquipment = async(equipment:EquipmentModel)=>{
    try{
        const savedEquipments = await equipmentClient.create({
            data:equipment
        });
        return savedEquipments;

    }catch(e){
        console.log(e);
    }
}
