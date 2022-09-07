import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//configuring dotenv
dotenv.config();

//creating express app
const app = express();

//Allowing app to use json
app.use(express.json());

//Allowing app to use cors
app.use(cors());


//importing routes
import postRoutes from "./routes/posts.js";

//using routes(applying middleware)
app.use("/posts", postRoutes);


//variables
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;


//Connecting to database
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected successfully!"))
.then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
.catch((error) => console.log(error.message));

