const express= require("express")
const router= express.Router();
const postController = require('../controllers/Post')

router.get('/getallPosts',postController.getAllPosts);

router.post('/Posts',postController.createPost)

router.put('/Posts/:postId',postController.updatePost)

router.delete('/Posts/:postId',postController.deletePost)

router.post('/Posts/:postId/like',postController.likePost)

router.post('/Posts/:postId/unlike',postController.unlikePost)

router.post('/Posts/:postId/comment',postController.addcomment)

router.get('/Post/:postId/similarPosts',postController.getSimilarPosts)

module.exports=router;