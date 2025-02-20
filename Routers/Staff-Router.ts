import express from 'express';
import { getAllStaff } from '../database/StaffDatabse';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllStaff())
})

export default router;