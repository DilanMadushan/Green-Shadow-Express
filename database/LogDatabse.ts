import { PrismaClient } from "@prisma/client";
import LogModel from "../models/LogModel";

const logClient = new PrismaClient().log;

export const getAllLogs = async () => {
    try{
        const allLogs = await logClient.findMany();
        return allLogs;
    }catch(e){
        console.log(e);
    } 
}

export const saveLog = async (log: LogModel) => {
    try{
        const savedLog = await logClient.create({
            data:log
        });
        return savedLog;
    }catch(e){
        console.log(e);
    }
}

export const updateLog = async (log: LogModel) => {
    try{
        const updatedLog = await logClient.update({
            where:{
                logCode:log.logCode
            },data:log
        })
        return updatedLog;
    }catch(e){
        console.log(e);
    }
}