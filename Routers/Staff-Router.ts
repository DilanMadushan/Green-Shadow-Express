import express from 'express';
import { getAllStaff,saveStaff,updateStaff,deleteStaff} from '../database/StaffDatabse';
import StaffModel from '../models/StaffModel';

const router = express.Router();

router.get('/getall',async(req,res)=>{
    res.json(await getAllStaff())
})

router.post('/save',async(req,res)=>{
    const newStaff :StaffModel = req.body;
    const staff = new StaffModel(
        newStaff.staffId,
        newStaff.firstName,
        newStaff.lastName,
        newStaff.dob,
        newStaff.gender,
        newStaff.joinDate,
        newStaff.address,
        newStaff.mobile,
        newStaff.email,
    )

    res.json(await saveStaff(staff));
});

router.patch('/update',async(req,res)=>{
    const newStaff :StaffModel = req.body;
    const staff = new StaffModel(
        newStaff.staffId,
        newStaff.firstName,
        newStaff.lastName,
        newStaff.dob,
        newStaff.gender,
        newStaff.joinDate,
        newStaff.address,
        newStaff.mobile,
        newStaff.email,
    )

    res.json(await updateStaff(staff));
})

router.delete('/delete/:staffId',async(req,res)=>{
    const staffId = req.params.staffId;
    res.json(await deleteStaff(staffId));
})

export default router;