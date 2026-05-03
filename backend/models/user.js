const {model,Schema} = require('mongoose');

const userschema = new Schema(
    {
    name:{
        type: String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },   
},
{
    timestamps:true,
}
);

const models = model("user",userschema);

module.exports = models;