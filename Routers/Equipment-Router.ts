import express from 'express';
import { getAllEquipments } from '../database/EquipmentDatabase';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllEquipments());
})

export default router;