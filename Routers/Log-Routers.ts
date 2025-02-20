import express from 'express';
import { getAllLogs } from '../database/LogDatabse';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllLogs());
})

export default router;