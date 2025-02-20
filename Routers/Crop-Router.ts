import express from 'express';
import CropModel from '../models/CropModel';
import { json } from 'node:stream/consumers';
import { 
    deleteCrop,
    getAllCrops,
    saveCrop,
    updateCrop
 } from '../database/CustomerDatabase';

const router = express.Router();

router.get('/getAll',async(req,res)=>{
    res.json(await getAllCrops());
})

router.post('/save',async(req,res)=>{
    const crop : CropModel = req.body;
    res.json(await saveCrop(crop));
})

router.patch('/update',async(req,res)=>{
    const crop : CropModel = req.body;
    res.json(await updateCrop(crop));
})

router.delete('/delete/:code',async(req,res)=>{
    const code = req.params.code;
    res.json(await deleteCrop(code))
})


export default router;