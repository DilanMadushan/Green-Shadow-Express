import express,{ Request, Response, NextFunction }  from 'express';
import jwt from 'jsonwebtoken';
import { Secret } from "jsonwebtoken";
import { cachedDataVersionTag } from 'v8';
import UserModel from '../models/UserModel';
import { registerUser } from '../database/UserDatabase';
import exp from 'constants';

const router = express.Router();

router.post('/register',async(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    const user : UserModel  = new UserModel(username,password,role);

    try{
        const Registration  = registerUser(user);
        const token = jwt.sign({username:Registration},process.env.SECRET_KEY as Secret, {expiresIn: "10d"});
        res.status(201).json(await "Bearer " +token);
    }catch(e){
        res.status(500).json(e);
    }
    
})

export const authenticateToken = (req:Request,res:Response,next:NextFunction)=>{
    const authHeder = req.headers.authorization;
    const token  = authHeder?.substring(7);

    if(!token){
        res.status(401).json('No Token Provided');
    }

    try{
        const payload = jwt.verify(token as string, process.env.SECRET_KEY as Secret) as { username: string, iat: number };
        req.body.username = payload.username;
        next();

    }catch(e){
        res.status(403).json(e);
    }
}

export default router;
