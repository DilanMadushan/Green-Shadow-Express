import express from 'express';
import { getAllLogs,saveLog } from '../database/LogDatabse';
import LogModel from '../models/LogModel';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllLogs());
})

router.post("/save",async(req,res)=>{
    const log : LogModel = req.body;
    res.json(await saveLog(log));
})

export default router;