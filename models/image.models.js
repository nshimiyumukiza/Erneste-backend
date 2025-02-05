import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    like:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    dislike:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]


},{timestamps:true})

imageSchema.pre(/^find/,function(next){
    this.populate({
        path:"comment",
        select:"user commentMessgae postedAt"
    })
    next()
})
const Img = mongoose.model("Img",imageSchema)
export default Img