const Comment= require('../models/Comments')
const Post=require('../models/Post')

exports.createComment = async (req,res)=>{
    try{
        const {content,postId}=req.body
        const userId= req.user.id;
        if(!content || !postId){
            return res.status(400).json({message:'invalid credentials'})
        }
        const comment= new Comment({
            content,
            user:userId,
            post:postId
        })
        const saved= await comment.save();
        res.status(201).json({
            success:true,
            message:'comment saved',
            comment:saved
        })
    }catch(err){
        res.status(404).json({message:err})
    }   
}

exports.getCommentsById= async (req,res)=>{
    try{
        const {postId} = req.body
    const comment= await Comment.find({
        post:postId
    }).populate('user','firstName lastName email')
    .populate('replies')

    res.status(200).json({
        success:true,
        comment
    })
    }catch(error){
        res.status(500).json({success:'false', message:error.message})
    }
}
exports.deleteComment= async (req,res)=>{
    try{
        const {commentId}= req.body;
        const comment= await Comment.findById(commentId)
        if(!comment){
            return res.status(404).json({
                success:false,
                message:"Comment not fount"
            })
        }
        if(comment.user.toString()!==req.user.id){
            return res.status(403).json({
                success:false,
                message:"unauthorized action"
            })
        }
        await comment.remove();
        res.status(200).json({
            success: true,
            message: "Comment deleted successfully"
        });
    }catch(error){
        res.status(500).json({
            message:error.message,
            success:false
        })
    }
}

exports.replyToComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;

        const userId = req.user.id;

        if (!content) {
            return res.status(400).json({
                success: false,
                message: "Content is required"
            });
        }

        const parentComment = await Comment.findById(commentId);
        if (!parentComment) {
            return res.status(404).json({
                success: false,
                message: "Parent comment not found"
            });
        }

        const replyComment = new Comment({
            content,
            user: userId,
            post: parentComment.post,
        });

        parentComment.replies.push(replyComment._id);
        await replyComment.save();
        await parentComment.save();

        res.status(201).json({
            success: true,
            message: "Reply added successfully",
            reply: replyComment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};