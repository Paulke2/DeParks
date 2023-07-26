const express = require('express');
const router = express.Router();
const Plant = require("../models/plantModel.js");
const mongoose = require('mongoose');
//get all Plants
router.get('/', async(req,res)=>{
    try {
        const plants = await Plant.find().sort();
        res.status(200).json(plants);
    }catch (error){
        //status 500 means it is a db error
        res.status(500).json({error: error.message});
    }
});
//getting one
router.get('/:Plantid',async (req,res)=>{
    const {Plantid}=req.params;
        if(!mongoose.Types.ObjectId.isValid(Plantid)){
            return res.status(404).json({error: "plant not found"});
        }
        const plant = await Plant.findById(Plantid);
        if(!plant){
            return res.status(404).json({error: "plant not found"});
        }
     res.status(200).json(plant);
});
//creating one
router.post('/', async(req,res)=>{
    const {name,img,description,Plantid}=req.body;

    try{
        const plant = await Plant.create({name,img,description,Plantid});
        res.status(200).json(plant);
    }
    catch (error){
        res.status(400).json({error: error.message});
    }

});
//deleting one
router.delete('/:Plantid', async(req,res)=>{
    const {Plantid}=req.params;
    if(!mongoose.Types.ObjectId.isValid(Plantid)){
        return res.status(404).json({error: "plant not found"});
    }
    const plant = await Plant.findOneAndDelete({_id: Plantid});
    if(!plant){
        return res.status(404).json({error: "plant not found"});
    }
 res.status(200).json(plant);

});

//update
router.patch('/:Plantid',async(req,res)=>{
    const {Plantid}=req.params;
    if(!mongoose.Types.ObjectId.isValid(Plantid)){
        return res.status(404).json({error: "plant not found"});
    }
    const plant = await Plant.findOneAndUpdate({_id: Plantid},{...req.body});
    if(!plant){
        return res.status(400).json({error: "plant not found"});
    }
    return res.status(200).json(plant);
});


//middleware function
async function getPlant(req, res, next){
    try {
            plant=await plan.find(req.params);
            if(plant==null){
                return res.status(404).json({message: "cannot find plant"});
            }
    }catch (err){

    }
    res.plant=plant;
    next();
}

module.exports=router;
