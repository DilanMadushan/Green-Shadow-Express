import express from 'express';
import { getAllVehicles,saveVehicle,updateVehicle } from '../database/VehicleDatabase';
import VehicleModel from '../models/VehicleModel';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllVehicles());
}) 

router.post('/save',async(req,res)=>{
    const vehicle :VehicleModel = req.body;
    res.json(await saveVehicle(vehicle));
})

router.patch('/update',async(req,res)=>{
    const vehicle :VehicleModel = req.body;
    res.json(await updateVehicle(vehicle));
})
export default router;