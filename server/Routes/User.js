const express=require('express')
const router=express.Router();


const {
    signup,
    login,
    sendotp,
} =require("../controllers/Auth")


const {auth,isAdmin}=require("../middlewares/auth")


// authentication routes 
router.post("/signup",signup)
router.post("/login",login)
router.post("/sendotp",sendotp)



module.exports=router

