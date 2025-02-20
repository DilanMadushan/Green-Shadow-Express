import { PrismaClient } from "@prisma/client";
import { log } from "node:console";

const vehicleClint = new PrismaClient().vehicle;

export const getAllVehicles = ()=>{
 try{
    const allVehicles = vehicleClint.findMany();
    return allVehicles;
 }catch(e){
    console.log(e);
 }
}