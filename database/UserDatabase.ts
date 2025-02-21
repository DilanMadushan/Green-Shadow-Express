import { PrismaClient, User } from "@prisma/client";
import UserModel from "../models/UserModel";
import bcrypt from 'bcrypt';

const userClient = new PrismaClient().user;

export const registerUser = async (user:UserModel) => {
    try {
        user.password = await bcrypt.hash(user.password,10);
        const regitration = await userClient.create({
            data:user
        });
        return regitration;
    } catch (e) {
        console.log(e);
    }
};