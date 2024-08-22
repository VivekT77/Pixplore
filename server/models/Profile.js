const mongoose=require('mongoose')

const profileSchema=new mongoose.Schema({
    about:{
        type:String,
        trim:true,
    },
    gender:{
        type:String,

    },
    website:{
        type:String,

    },
    username:{
        type:String,
    },
    contactNumber: {
		type: Number,
		trim: true,
	},
})

exports.mongoose=mongoose.model("Profile",profileSchema)