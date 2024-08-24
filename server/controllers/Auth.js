const User =require("../models/User")
const Profile=require("../models/Profile")
const bcrypt =require("bcrypt")
const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");


exports.signup=async (req,res)=>{
    try{
        // fetch all the fields that are required
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp,
        }=req.body

        // validate the data if user pass any empty field or not
        if(!firstName ||
            !lastName ||
            !email || 
            !password ||
            !confirmPassword ||
            !accountType || 
            !contactNumber ||
            !otp
        ){
        
            return res.status(403).send({
                success:false,
                message:"All fields are required"
            })
        }

        // check of password and confirm pass are equal or not
        if(password !== confirmPassword){
            return res.status(400).json({
                message:false,
                message:"password and confirmpassword fo not match, please try again"
            })
        }

        // check if user already exist or not 
        const existingUser=await User.findOne({email})

        // check if this user already exist or not
        if(existingUser){
            return res.status(404).json({
                success:false,
                message:"User alredy exists, please sign up to continue"
            
            })
        }

        // hashed the password
        const hashedPassword=await bcrypt.hash(password,10)

            const userProfileDetails = await Profile.create({
                about: null,
                gender: null,
                website: null,
                username: null,
                contactNumber: null,
            });
        

        const user=await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType:accountType,
            additionalDetails:userProfileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,

        })

        return res.status(200).json({
            success:true,
            user,
            message:"User created successfully",

        })


    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"User can not be registered, please try again"
        })

    }
}

exports.login=async (req,res)=>{
 
    try{

           
    // fetch the data
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Required all fields"
        })
    }

    const user=await User.findOne({email}).populate("additionalDetails")


    if(!user){
        return res.status(401).json({
            success:false,
            message:"User is not registered with us please signup to continue"
        })
    }

    if(await bcrypt.compare(password,user.password)){
        const token=jwt.sign(
            {email:user.email,id:user._id,accountType:user.accountType},
            process.env.JWT_SECRET,
            {
                expiresIn:"24h",
            }
        )

        // save token to user database
        user.token=token;
        user.password=undefined;

        // Set cookie for token and return success response
        const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
         };

         res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login Success`,
          });


    }else{
        return res.status(401).json({
            success: false,
            message: `Password is incorrect`,
          });
    }
        
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Login Failure please try again"
        })
    }


}

exports.sendotp=async (req,res)=>{
    try{
        const {email}=req.body;

        if(!email){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }
        
        const existingUser=await User.findOne({email})

        if(existingUser){
            return res.status(401).json({
                success:false,
                message:"user is alredy registred"
            })
        }

        var otp=otpGenerator.generate(6,
            {
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            }
        )

        const result=await OTP.findOne({otp:otp});
        while(result){
            otp=otpGenerator.generate(6,
                {
                    upperCaseAlphabets:false,
                    lowerCaseAlphabets:false,
                    specialChars:false,
                }
            )
        }

        const otpPayload={email,otp};
        const otpBody=await OTP.create(otpPayload);

        console.log("OTP BODY: ",otpBody    )

        res.status(200).json({
            success:true,
            message:"OTP sent successfully",
            otp,
        })


    }catch(error){
        console.log(error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
}

