const Post = require('../models/Post')
const User = require('../models/User')
const Comments= require('../models/Comments')
const mongoose= require('mongoose')
const category= require('../models/Category')

exports.getAllPosts = async (req, res)=>{
    try{
        const posts= await Post.find()
        .populate('creator','email')
        .populate('categories','title')
        .populate('comments');
        res.status(200).json(posts);
    } catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.createPost= async (req,res)=>{
    try{
        const {title,description,link,tags,image,categories,allowcomments,showSimilarPosts,status} = req.body;

        const newPost= new Post({
            title,
            description,
            link,
            tags,
            image,
            categories,
            allowcomments,
            showSimilarPosts,
            status,
            creator:req.user.id
        })
        const savePost= await newPost.save()
        res.status(201).json(savePost)
    } catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.updatePost= async (req,res)=>{
    try{
        const post= await Post.findById(req.params.postId)
        if(!post){
            return res.status(404).json({message:"Post not found"})
        }
        if(!post.creator.toString() !== req.user.id){
            return res.status(404).json({message:"Invalid"})
        }

        post.title = req.body.title || post.title;
        post.description = req.body.description || post.description;
        post.link = req.body.link || post.link;
        post.tags = req.body.tags || post.tags;
        post.image = req.body.image || post.image;
        post.categories = req.body.categories || post.categories;
        post.allowComments = req.body.allowComments !== undefined ? req.body.allowComments : post.allowComments;
        post.showSimilarPosts = req.body.showSimilarPosts !== undefined ? req.body.showSimilarPosts : post.showSimilarPosts;
        post.status = req.body.status || post.status;

        const update= await post.save()
        res.status(200).json(update);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.deletePost= async (req,res)=>{
    try{
        const post= await Post.findById(req.params.postId)
    if(!post){
        return res.status(404).json({message:"not found"})
    }
    if(post.creator.toString()!=req.user.id){
        return res.status(403).json({ message: "invalid" })
    }
    await post.remove();
    res.status(200).json({ message: "Post deleted successfully" });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) return res.status(404).json({ message: "Post not found" });

        post.likes += 1;
        await post.save();

        res.status(200).json({ message: "Post liked", likes: post.likes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.unlikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.likes > 0) {
            post.likes -= 1;
            await post.save();
        }

        res.status(200).json({ message: "Post unliked", likes: post.likes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addcomment= async (req,res)=>{
    try{
        const post= await Post.findById(req.params.postId)
        if (!post) return res.status(404).json({ message: "Post not found" });

        const comment= new Comments({
            content:req.body.content,
            user:req.body.user,
            post:req.body.post,
            createdAt: new Date(),
        })

        const savedComment=await comment.save()
        post.comments.push(savedComment._id)
        await post.save()
        res.status(200).json(post);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
exports.getSimilarPosts = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate('categories');
        if (!post) return res.status(404).json({ message: "Post not found" });

        const similarPosts = await Post.find({
            $or: [
                { tags: { $in: post.tags } },
                { categories: { $in: post.categories } }
            ],
            _id: { $ne: post._id } 
        }).limit(10);

        res.status(200).json(similarPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};