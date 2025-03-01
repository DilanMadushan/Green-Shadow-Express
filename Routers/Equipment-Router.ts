import express from 'express';
import { getAllEquipments,saveEquipment,updateEquipment,deleteEquipment} from '../database/EquipmentDatabase';
import EquipmentModel from '../models/EquipmentModel';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllEquipments());
})

router.post('/save',async(req,res)=>{
    const equipmentTemp : EquipmentModel = req.body;
    const equipment = new EquipmentModel(
        equipmentTemp.equipmentId,
        equipmentTemp.name,
        equipmentTemp.type,
        equipmentTemp.status,
        equipmentTemp.field,
        equipmentTemp.staff,
    );

    console.log(equipment)
    res.json(await saveEquipment(equipment));
})

router.patch('/update',async(req,res)=>{
    const equipmentTemp : EquipmentModel = req.body;
    const equipment = new EquipmentModel(
        equipmentTemp.equipmentId,
        equipmentTemp.name,
        equipmentTemp.type,
        equipmentTemp.status,
        equipmentTemp.field,
        equipmentTemp.staff,
    );
    res.json(await updateEquipment(equipment));
})

router.delete('/delete/:equipmentId',async(req,res)=>{
    const equipmentId = req.params.equipmentId;
    res.json(await deleteEquipment(equipmentId));
})

export default router;