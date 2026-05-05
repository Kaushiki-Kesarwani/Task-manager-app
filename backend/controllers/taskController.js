const task = require('../models/task');

const createtask = async (req,res)=>{
    try{
    const {title} = req.body;

    const work = await task.create({
        title,
        user:req.user,//comes from authmiddleware means task is linked to logged in user
    });

    res.status(201).json(task);
    }catch(error){
        res.status(500).json({msg:error.msg});
    }
};


module.exports = {createtask};