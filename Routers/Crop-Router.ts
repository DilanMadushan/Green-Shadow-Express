import express from 'express';
import CropModel from '../models/CropModel';
import { json } from 'node:stream/consumers';
import { 
    getAllCrops,
    saveCrop,
    updateCrop
 } from '../database/CustomerDatabase';

const router = express.Router();

router.get('/getAll',(req,res)=>{
    const allCrops = getAllCrops();

    allCrops.then((data)=>{
        res.send(JSON.stringify(data));
    });

})


router.post('/save',async(req,res)=>{
    const crop : CropModel = req.body;
    res.json(await saveCrop(crop));
})



router.patch('/update',async(req,res)=>{
    const crop : CropModel = req.body;
    res.json(await updateCrop(crop));
})

router.delete('/delete',(req,res)=>{
    res.send("delete All Crops");
})


export default router;