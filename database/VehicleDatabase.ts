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

export const updateVehicle = async(vehicle:VehicleModel)=>{
    try{
        const updatedVehicle = await vehicleClint.update({
            where:{
                vehicleCode:vehicle.vehicleCode
            },data:vehicle
        });
        return updatedVehicle;
    }catch(e){
        console.log(e);
    }
}

export const deleteVehicle = async(vehicleCode:string)=>{
    try{
        const deletedVehicle = await vehicleClint.delete({
            where:{
                vehicleCode:vehicleCode
            }
        });
        return deletedVehicle;
    }catch(e){
        throw new Error(`Failed to delete vehicle: ${e}`);
    }
}