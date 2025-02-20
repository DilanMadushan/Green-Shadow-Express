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