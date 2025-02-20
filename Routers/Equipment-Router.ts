import express from 'express';
import { getAllEquipments,saveEquipment,updateEquipment } from '../database/EquipmentDatabase';
import EquipmentModel from '../models/EquipmentModel';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllEquipments());
})

router.post('/save',async(req,res)=>{
    const equipment : EquipmentModel = req.body;
    res.json(await saveEquipment(equipment));
})

router.patch('/update',async(req,res)=>{
    const equipment :EquipmentModel = req.body;
    res.json(await updateEquipment(equipment));
})

export default router;