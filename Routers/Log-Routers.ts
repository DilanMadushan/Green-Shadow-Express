import express from 'express';
import { getAllLogs,saveLog, updateLog } from '../database/LogDatabse';
import LogModel from '../models/LogModel';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllLogs());
})

router.post("/save",async(req,res)=>{
    const log : LogModel = req.body;
    res.json(await saveLog(log));
})

router.patch("/update",async(req,res)=>{
    const log : LogModel = req.body;
    res.json(await updateLog(log));
})

export default router;