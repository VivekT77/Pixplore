const express=require('express')
const router=express.Router();


const {
    createCategory,
    showAllCategories,
    getCategoryDetails

} = require("../controllers/Category")

const {auth,isAdmin}=require("../middlewares/auth")



// category routes
router.post("/createCategory",auth, isAdmin, createCategory)
router.get("/showAllCategories",showAllCategories)
router.post("/getCategoryDetails",getCategoryDetails)

module.exports=router

