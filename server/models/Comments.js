const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        trim:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()

    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    replies: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ]

})

module.exports=mongoose.model("Comment",commentSchema)