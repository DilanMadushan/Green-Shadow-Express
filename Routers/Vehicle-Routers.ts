import express from 'express';
import { getAllVehicles,saveVehicle } from '../database/VehicleDatabase';
import VehicleModel from '../models/VehicleModel';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllVehicles());
}) 

router.post('/save',async(req,res)=>{
    const vehicle :VehicleModel = req.body;
    res.json(await saveVehicle(vehicle));
})
export default router;