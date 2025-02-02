import Comment from "../models/comment.js"
import Img from "../models/image.models.js"

class CommentController{
    static async postComment(req,res){
        const imageId = req.params.id
        const image = await Img.findById(imageId)
        if(!image){
            return res.status(403).json({message:"Image not found"})
        }else{
            const comment = await Comment.create(req.body)

            const newImage = await Img.findByIdAndUpdate({_id:imageId},{$push:{comment:comment}},{new:true})
            if(!newImage){
                return res.status(403).json({message:"Fail to push comment on image"})
            }else{
                return res.status(201).json({message:" comment successfuly created",data:comment})
            }
        }
    }
}
export default CommentController