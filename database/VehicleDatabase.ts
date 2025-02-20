import { PrismaClient } from "@prisma/client";
import e from "express";
import { log } from "node:console";
import VehicleModel from "../models/VehicleModel";

const vehicleClint = new PrismaClient().vehicle;

export const getAllVehicles = ()=>{
 try{
    const allVehicles = vehicleClint.findMany();
    return allVehicles;
 }catch(e){
    console.log(e);
 }
}


export const saveVehicle = async(vehicle:VehicleModel)=>{
    try{
        const savedVehicle = await vehicleClint.create({
            data:vehicle
        });
        return savedVehicle;

    }catch(e){
        console.log(e);
    }    
}