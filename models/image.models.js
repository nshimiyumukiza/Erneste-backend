import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true})
const Img = mongoose.model("Img",imageSchema)
export default Img