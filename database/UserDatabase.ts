import { PrismaClient, User } from "@prisma/client";
import UserModel from "../models/UserModel";
import bcrypt from 'bcrypt';
import { log } from "console";

const userClient = new PrismaClient().user;

export const registerUser = async (user:UserModel) => {
    try {
        user.password = await bcrypt.hash(user.password,10);
        const regitration :UserModel | null = await userClient.create({
            data:user
        });
        return regitration;
    } catch (e) {
        console.log(e);
    }
};

export const validateUser = async(user:UserModel)=>{
    try{
        const fidedUser : UserModel | null = await userClient.findUnique({
            where:{
                username:user.username
            }
        })

        if(!fidedUser){
            return false;
        }
        console.log(fidedUser.password);
        console.log(user.password);
        
        return await bcrypt.compare( user.password,fidedUser.password); 
    }catch(e){
        console.log(e);
    }
}