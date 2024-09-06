const mongoose=require("mongoose")
const Post=require("../models/Post")


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
    longDescription:{
        type:String,
        required:true,
        trim:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
        }
    ]

})

module.exports=mongoose.model("Category",categorySchema)