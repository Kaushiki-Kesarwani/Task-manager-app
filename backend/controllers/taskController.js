const task = require('../models/task');

//add tasks
const createtask = async (req,res)=>{
    try{
    const {title} = req.body;

    const work = await task.create({
        title,
        user:req.user,//comes from authmiddleware means task is linked to logged in user
    });

    res.status(201).json(work);
    }catch(error){
        res.status(500).json({msg:error.msg});
    }
};

//get all tasks

const gettask = async (req,res)=>{
    try{
        const tasks = await task.find({user:req.user})
        res.json(tasks);
    }catch(error){
         res.status(500).json({ message: error.message });
    }
};


//update all tasks

const updatetask = async(req,res)=>{
    try{
        const work = await task.findById(req.params.id);

        if(!work){
            return res.status(404).json({msg:"task not found"});
        }

         // check owner
    if (work.user.toString() !== req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }
      // update
    work.title = req.body.title || work.title;
    work.completed = req.body.completed ?? work.completed;

    const updatedTask = await work.save();

    res.json(updatedTask);

    }catch(err){
        res.status(500).json({msg:err.msg});
    }
};

const deletetask = async (req, res) => {
  try {
    const work = await task.findById(req.params.id);

    // check task exist
    if (!work) {
      return res.status(404).json({ message: "Task not found" });
    }

    // check owner
    if (work.user.toString() !== req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // delete task
    await work.deleteOne();

    res.json({ message: "Task deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {createtask,gettask,updatetask,deletetask};