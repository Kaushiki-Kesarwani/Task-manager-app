const User = require('../models/user');
const bcrypt = require('bcryptjs');

const registeruser = async(req,res)=>{
    try{
        const{name,email,password} = req.body;

        //check if user exist
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"user already exist"});
        }


        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //create user
        const user = await User.create({
            name,
            email,
            password:hashedPassword, //password is encrypted and encrypted means data is converted into an unreadable form
        });

        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};

module.exports = {registeruser};

