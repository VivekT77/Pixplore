const User =require("../models/User")
const Profile=require("../models/Profile")
const Otp=require("../models/OTP")
const bcrypt =require("bcrypt")
const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");


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

        const userProfileDetails=await Profile.create({
            about:null,
            gender:null,
            website:null,
            username:null,
            contactNumber:null,

        })

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