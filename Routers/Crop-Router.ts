import express from 'express';
import CropModel from '../models/CropModel';
import { json } from 'node:stream/consumers';

const router = express.Router();

router.get('/getAll',(req,res)=>{
    res.send("Get All Crops");
})

router.post('/save',async(req,res)=>{
    const corp:CropModel =req.body;
    res.send(JSON.stringify(corp));
})

router.patch('/update',(req,res)=>{
    res.send("save All Crops");
})

router.delete('/delete',(req,res)=>{
    res.send("delete All Crops");
})


export default router;