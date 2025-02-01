import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import router from "./routers/userRouter.js";
import imageRouter from "./routers/image.router.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 5000; 
const db = process.env.DB;


app.use(express.json());
app.use(express.urlencoded({extended:true})) 
app.use("/users",router)
app.use("/image",imageRouter)
    




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get("/",(req,res)=>{
    res.send("hi gaga")
})


mongoose.connect(db)
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error(`Database connection error: ${err}`));


 