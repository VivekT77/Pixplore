const express=require('express')
const app=express()
require('dotenv').config()
const database = require("./config/database");
const PORT = process.env.PORT || 5000;
const postController= require('./controllers/Post')
const postRoute= require('./Routes/PostRoutes')
database.connect();

app.use(express.json());

  
app.use("/new",postRoute)
  
  app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
  });
  