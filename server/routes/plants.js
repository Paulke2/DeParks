const express = require('express');
const router = express.Router();
const plant = require("./plant.js");

//get all Plants
router.get('/',async (req,res)=>{
    //res.send('HELLOOOOO');
    try {
        const plants = await plant.find();
    }catch (err){
        //status 500 means it is a db error
        res.status(500).json({message: err.message});
    }
});
//getting one
router.get('/:Plantid',(req,res)=>{
    res.send(req.params.Plantid);
});
//creating one
router.post('/', async (req,res)=>{
    const new_plant = new plant({
        name: req.body.name,
        picture: req.body.picture,
        description: req.body.description,
        Plantid: req.body.Plantid,
        qr: req.body.qr

    })
    try {
        const new_plant = await hasSubscribers.save();
        //201 means successful creation
        res.status(201).json(new_plant);
    }catch (err) {
        res.status(400).json({message: err.message});
    }

});
//deletingone
router.delete('/Plantid',(req,res)=>{

});
//updating one
router.patch('/',(req,res)=>{

});


module.exports=router;
