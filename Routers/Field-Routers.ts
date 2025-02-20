import express from "express";
import { getAllFields } from "../database/FieldDatabase";

const router = express.Router();

router.get('/getAll',async(req,res)=>{
    res.json(await getAllFields());
})

router.post('/save',(req,res)=>{
    
})

router.get('/update',(req,res)=>{
    
})

router.get('/delete/:code',(req,res)=>{
    
})

export default router;