const express=require('express')
const router=express.Router();


const {
    signup,
    login,
    sendotp,
} =require("../controllers/Auth")

const {
    createCategory,
    showAllCategories,
    getCategoryDetails

} = require("../controllers/Category")

const {auth,isAdmin}=require("../middlewares/auth")


// authentication routes 
router.post("/signup",signup)
router.post("/login",login)
router.post("/sendotp",sendotp)

// category routes
router.post("/createCategory",auth, isAdmin, createCategory)
router.get("/showAllCategories",showAllCategories)
router.post("/getCategoryDetails",getCategoryDetails)


module.exports=router

