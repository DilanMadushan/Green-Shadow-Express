import { PrismaClient } from "@prisma/client";
import { log } from "node:console";
import FieldModel from "../models/FieldModel";

const fieldClient = new PrismaClient().field;

export const getAllFields = async () => {
    try{
        const allFields = await fieldClient.findMany();
        return allFields;
    }catch(e){
        console.log(e);
        
    } 
}   

export const saveFields = async(field:FieldModel)=>{
    try{
        const savedField= await fieldClient.create({
            data:{
                image1:field.image1,
                image2:field.image2,
                fieldCode:field.fieldCode,
                name:field.name,
                location:field.location,
                size:field.size
            }
        });
        return savedField;
    }catch(e){
        console.log(e);
    }
}

export const updateField = async (field:FieldModel) => {
    try{
        const updatedField = await fieldClient.update({
            where:{
                fieldCode:field.fieldCode
            },
            data:{
                image1:field.image1,
                image2:field.image2,
                name:field.name,
                location:field.location,
                size:field.size
            }
        });
        return updatedField;
    }catch(e){
        console.log(e);
    }
}