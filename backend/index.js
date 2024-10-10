import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import {User} from "./models/user.model.js"
import userRoute from "./routes/user.routes.js";

import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js"; 

//configuration 
dotenv.config({}); // Load environment variables from .env

const app = express();


// Basic route
// app.get('/home', (req, res) => {
//   return res.status(200).json({
//     message : "Coming towards backend",
//     success : true
//   })
// });
 
//MIDDLE WARE

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',  
  credentials: true
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//Api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
// "http://localhost:8000/api/v1/user/register"
// "http://localhost:8000/api/v1/user/login"
// "http://localhost:8000/api/v1/user/profile/update"
//...
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running at Port ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});
