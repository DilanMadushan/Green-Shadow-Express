import { PrismaClient } from "@prisma/client";
import StaffModel from "../models/StaffModel";
import { log } from "node:console";

const staffClient = new PrismaClient().staff;

export const getAllStaff = async () => {
    try{
        const allStaff = await staffClient.findMany();
        return allStaff;
    }catch(e){
        console.log(e);
    } 
}

export const saveStaff = async (staff:StaffModel) => {
    try{
        const savedStaff = await staffClient.create({
            data:staff
        });
        return savedStaff;

    }catch(e){
        console.log(e);
    }
}

export const updateStaff = async (staff:StaffModel) => {
    try{
        const updatedStaff = await staffClient.update({
            where:{
                staffId:staff.staffId
            },
            data:staff
        });
        return updatedStaff;
    }catch(e){
        console.log(e);
    }
}


export const deleteStaff = async(staffId:string)=>{
    try{
        const deletedStaff = await staffClient.delete({
            where:{
                staffId:staffId
            }
        });
        return deletedStaff;
    }catch(e){
        console.log(e);
    }
}