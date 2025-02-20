import express from 'express';
import { getAllVehicles,saveVehicle,updateVehicle,deleteVehicle} from '../database/VehicleDatabase';
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

router.delete('/delete/:vehicleCode',async(req,res)=>{
    const vehicleCode = req.params.vehicleCode;
    res.json(await deleteVehicle(vehicleCode));
})
export default router;