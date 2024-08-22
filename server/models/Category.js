const mongoose=require("mongoose")

const categorySchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"POST",
        }
    ]

})

exports.module=mongoose.model("Category",categorySchema)