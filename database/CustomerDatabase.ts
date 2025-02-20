import { PrismaClient } from "@prisma/client";
import { log } from "node:console";
import CropModel from "../models/CropModel";

const cropClient = new PrismaClient().crop;

export const getAllCrops = async () => {
    try{
        const allCrops = await cropClient.findMany();
        console.log(allCrops);
        
        return allCrops;
    }catch(e){
        console.log(e);
        
    } 
}

export const saveCrop = async (crop:CropModel) => {
    try{
        const savedCrop = await cropClient.create({
            data:{
                image : crop.image,
                cropCode : crop.cropCode, 
                name : crop.name,
                scientificName :crop.scientificName,
                sesson : crop.sesson,
                category : crop.category,
                field : crop.field,
            }
        });
        return savedCrop;

    }catch(e){
        console.log(e);
    }
}