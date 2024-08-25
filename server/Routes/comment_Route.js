const express=require("express")
const router =express.Router();
const commentController= require('../controllers/Comments')
const { isAuthenticated } = require('../middlewares/auth');


router.post('/comments', isAuthenticated, commentController.createComment);

router.get('/posts/:postId/comments', commentController.getCommentsByPost);

router.delete('/comments/:commentId', isAuthenticated, commentController.deleteComment);

router.post('/comments/:commentId/reply', isAuthenticated, commentController.replyToComment);

module.exports = router;