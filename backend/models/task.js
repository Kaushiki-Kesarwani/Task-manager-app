const {model,Schema} = require('mongoose');

const usertask = new Schema({
    title:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
},
{
    timestamps:true,
}
);

module.exports = model("task",usertask);


