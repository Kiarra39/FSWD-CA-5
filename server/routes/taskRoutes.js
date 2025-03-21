const express=require('express');
const Task= require('../models/Task');

const router= express.Router();

router.get("/", async(req ,res)=>{
    try{
        const task= await Task.find();
        res.status(200).json(task);
    }
    catch(err){
        res.status(500).json({message:"Error fetching tasks"});
    }
})

router.post("/", async(req,res)=>{
    const {title, description}=req.body;
    try{
        const createdTask= new Task({title, description});
        await createdTask.save();
        res.status(201).json({createdTask});
    }
    catch(err){
        res.status(500).json({message:"Error adding task"});
    }
})

module.exports= router;