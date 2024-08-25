const express=require('express')
const app=express()
require('dotenv').config()
const database = require("./config/database");
const PORT = process.env.PORT || 5000;
const userRoutes=require("./Routes/User")
const cookieParser = require("cookie-parser");
const {cloudinaryConnect}=require("./config/cloudinary")
const fileUpload = require("express-fileupload");
const cors = require("cors");


database.connect();
cloudinaryConnect()

app.use(express.json());
app.use(cookieParser());
// app.use(fileUpload());/ // for express-fileupload

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/', // Specify a directory for temporary files
  limits: { fileSize: 50 * 1024 * 1024 }, // Optional: Limit file size to 50MB
}));
app.use(cors());




app.use("/api/v1/auth",userRoutes);


app.get("/", (req, res) => {
    return res.json({
      success: true,
      message: "Your server is up and running....",
    });
  });

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
  });
