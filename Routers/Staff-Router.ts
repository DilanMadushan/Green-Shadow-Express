import express from 'express';
import { getAllStaff,saveStaff} from '../database/StaffDatabse';
import StaffModel from '../models/StaffModel';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllStaff())
})

router.post('/save',async(req,res)=>{
    const staff :StaffModel = req.body;
    res.json(await saveStaff(staff));
});

export default router;