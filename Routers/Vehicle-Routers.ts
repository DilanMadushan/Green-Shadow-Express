import express from 'express';
import { getAllVehicles } from '../database/VehicleDatabase';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllVehicles());
}) 

export default router;