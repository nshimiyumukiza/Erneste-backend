import mongoose from "mongoose";

const commentSchemas = new mongoose.Schema({

     user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },

    commentMessgae:{
        type:String,
        required:true
    },
    postedAt:{
        type:Date,
        default:new Date(Date.now())
    }
})

commentSchemas.pre(/^find/,function(next){
   this.populate({
     path:"user",
     select:"name email"
   })
   next()
})
const Comment = mongoose.model("Comment",commentSchemas)
export default Comment