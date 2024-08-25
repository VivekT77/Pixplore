const Category=require("../models/Category")
const User=require("../models/User")
const {uploadImageToCloudinary}=require("../utils/imageUploader")



function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

exports.createCategory=async (req,res)=>{

   try{

        // get user id from req body    
        const userId=req.user.id

        // console.log("userId: ",userId)  
            // fetch data from req body
        // console.log("thumbnail: ",req.files)
        const {title,description}=req.body;
        const thumbnail=req.files.thumbnailImage
    
        // console.log("thumbnail : ",thumbnail)
    

        //    validate data
        if(!title || !thumbnail){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        // check if user is an admin
        const checkAdmin=await User.findById(userId,{
            accountType:"Admin"
        })

        if(!checkAdmin){
            return res.status(403).json({
                success:false,
                message:"admin details not found"
            })
        }

        const isCategoryPresent=await Category.findOne({title});

        if(isCategoryPresent){
            return res.status(409).json({
                success:false,
                message:"This category already exists"
            })
        }

        const thumbnailImage=await uploadImageToCloudinary(
            thumbnail,
            process.env.FOLDER_NAME
        )

        // console.log("thumbnailImage :",thumbnailImage)



        const category=await Category.create({
            title:title,
            description:description,
            thumbnail:thumbnailImage.secure_url
        })

        console.log("category",category)

        return res.status(200).json({
            success:true,
            message:"Category created successfully"
        })


   }catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Can not create category please try again"

    })

   }

}

exports.showAllCategories=async(req,res)=>{
    try{
    
        const AllCategories=await Category.find({},{title:true,description:true,thumbnail:true});

        if(!AllCategories){
            return res.status(404).json({
                success:false,
                data:AllCategories,
                message:"there are no categories present"
            })
        }

        return res.status(200).json({
            success:true,
            message:"fetched all categories successfully",
            data:AllCategories
        })


    }catch(error){
        return res.status(500).json({
            success:false,
            message:"can not fetch the categories"
        })

    }
}

exports.getCategoryDetails=async (req,res)=>{
    
    try{
            // fetch the category id
        const {categoryId}=req.body;

        if(!categoryId){
            return res.status(400).json({
                success:false,
                message:"category id is required"

            })
        }

        const selectedCategory=await Category.findById(categoryId).populate("posts").exec()

        if(!selectedCategory){
            return res.status(404).json({
                success:false,
                message:`can not find the category with ${categoryId}`
            })
        }

            // Handle the case when there are no courses
        if (selectedCategory.posts.length === 0) {
            console.log("No posts found for the selected category.")
            return res.status(404).json({
            success: false,
            message: "No posts found for the selected category.",
            })
        }

            
        // Get courses for other categories
        const categoriesExceptSelected = await Category.find({
            _id: { $ne: categoryId },
        })
        let differentCategory = await Category.findOne(
            categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
              ._id
          )
            .populate("posts")
            .exec()
        
            const popularCategories = await Category.aggregate([
                // Lookup to join with posts collection
                {
                    $lookup: {
                        from: 'posts', // Name of the posts collection
                        localField: 'posts', // Field in Category schema that references posts
                        foreignField: '_id', // Field in Posts schema that corresponds to the reference
                        as: 'postsDetails' // Name of the new field that will contain the joined posts
                    }
                },
                // Count the number of posts in each category
                {
                    $addFields: {
                        postCount: { $size: "$postsDetails" } // Size of postsDetails array
                    }
                },
                // Sort by post count in descending order
                {
                    $sort: { postCount: -1 }
                },
                // Project only necessary fields
                {
                    $project: {
                        title: 1,
                        description: 1,
                        thumbnail: 1,
                        postCount: 1 // Include postCount in the output
                    }
                }
            ]);



        return res.status(200).json({
            success:true,
            message:"category details fetched successfully",
            data:{
                selectedCategory,
                differentCategory,
                popularCategories
            }
        })

    }catch(error){
        console.log("error : ",error);
        return res.status(500).json({
            success:false,
            message:error.message
        })

    }
}