const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    link:{
        type:String,
    },
    tags:[
        {
            type:String
        }
    ],
    image:{
        type:String,
        required:true,
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ],
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    likes:{
        type:Number,
        default:0,

    },
    categories:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        }
    ],
    allowcomments:{
        type:Boolean,
        deafult:true,
    },
    showSimilarPosts:{
        type:Boolean,
        default:true,

    },
    status: {
		type: String,
		enum: ["Draft", "Published"],
	},
})

module.exports=mongoose.model("Post",postSchema)