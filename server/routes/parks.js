const express = require('express');
const router = express.Router();
const Park = require("../models/parkModel.js");
const mongoose = require('mongoose');

//get all
router.get('/', async(req,res)=>{
    try {
        const plants = await Park.find().sort();
        res.status(200).json(plants);
    }catch (error){
        //status 500 means it is a db error
        res.status(500).json({error: error.message});
    }
});
//get one
router.get('/:Parkid',async (req,res)=>{
    const {Parkid}=req.params;
        if(!mongoose.Types.ObjectId.isValid(Parkid)){
            return res.status(404).json({error: "park not found"});
        }
        const plant = await Park.findById(Parkid);
        if(!plant){
            return res.status(404).json({error: "park not found"});
        }
     res.status(200).json(plant);
});
//create one
router.post('/', async(req,res)=>{
    const {name,img,description,Parkid,location,plants}=req.body;

    try{
        const park = await Park.create({name,img,description,Parkid,location,plants});
        res.status(200).json(park);
    }
    catch (error){
        res.status(400).json({error: error.message});
    }

});
//delete one
router.delete('/:Parkid', async(req,res)=>{
    const {Parkid}=req.params;
    if(!mongoose.Types.ObjectId.isValid(Parkid)){
        return res.status(404).json({error: "park not found"});
    }
    const Park = await Park.findOneAndDelete({_id: Parkid});
    if(!plant){
        return res.status(404).json({error: "park not found"});
    }
 res.status(200).json(plant);

});

//update 

router.patch('/:Parkid',async(req,res)=>{
    const {Parkid}=req.params;
    if(!mongoose.Types.ObjectId.isValid(Parkid)){
        return res.status(404).json({error: "park not found"});
    }
    const plant = await Park.findOneAndUpdate({_id: Parkid},{...req.body});
    if(!plant){
        return res.status(400).json({error: "park not found"});
    }
    return res.status(200).json(plant);
});
module.exports=router;