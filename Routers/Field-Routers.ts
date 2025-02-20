import express from "express";
import { getAllFields,saveFields,updateField} from "../database/FieldDatabase";
import FieldModel from "../models/FieldModel";


const router = express.Router();

router.get('/getAll',async(req,res)=>{
    res.json(await getAllFields());
})

router.post('/save',async(req,res)=>{
    const field : FieldModel = req.body;
    res.json(await saveFields(field));
})

router.patch('/update',async(req,res)=>{
    const field : FieldModel = req.body;
    res.json(await updateField(field));
})

router.get('/delete/:code',(req,res)=>{
    
})

export default router;