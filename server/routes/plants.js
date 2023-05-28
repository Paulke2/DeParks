const express = require('express');
const router = express.Router();
const Plant = require("../models/plantModel.js");
const mongoose = require('mongoose');
//get all Plants
router.get('/', async(req,res)=>{
    //res.send('HELLOOOOO');
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
        if(!mongoose.Types.ObjectId.isValid(req.params.Plantid)){
            return res.status(404).json({error: "plant not found"});
        }
        const plant = await Plant.findById(req.params.Plantid);
        if(!plant){
            return res.status(404).json({error: "plant not found"});
        }
     res.status(200).json(plant);
});
//creating one
router.post('/', async(req,res)=>{
    const {name,description,Plantid}=req.body;

    try{
        const plant = await Plant.create({name,description,Plantid});
        res.status(200).json(plant);
    }
    catch (error){
        res.status(400).json({error: error.message});
    }

});
//deleting one
router.delete('/:Plantid', (req,res)=>{
// try{
// await res.subscriber.remove();
// res.json({message: "Deleted plant"});
// }catch(err){
//     res.status(500).json({message: err.message});
// }
res.json({messg:'delete a plant'});
});

//update
router.patch('/:Plantid',(req,res)=>{
    res.json({message: "updated plant"});
})
//middleware function
async function getPlant(req, res, next){
    try {
            plant=await plan.find(req.params.Plantid);
            if(plant==null){
                return res.status(404).json({message: "cannot find plant"});
            }
    }catch (err){

    }
    res.plant=plant;
    next();
}

module.exports=router;
