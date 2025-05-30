import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";
import FeedbackRoutes from './Routes/FeedbackRoutes.js'
import cors from "cors"


dotenv.config();
const port = process.env.PORT || 5000;
//connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Mongo Connection error : ", err));
  
  app.use(cors())
  app.use(express.json()) //For Parsing JSON requests
  app.use('/feedback' , FeedbackRoutes)
  

  app.get('/' , (req , res) => {
    res.send("Hello")
  })


  app.listen(port , () => {
    console.log(`Server is Listening on Port ${port}`)
  })
