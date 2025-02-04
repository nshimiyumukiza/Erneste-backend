import Img from "../models/image.models.js";

// post image

const createImage = async (req,res)=>{
    try {
        const image = await Img.create(req.body);
        res.status(201).json({message:"image created succefily !!",data:image})
    } catch (error) {
      res.status(500).json({message:error.message})  
    }
}

// get all image

const getImage = async (req,res)=>{
  try {
    const image = await Img.find({});
    res.status(200).json({message:`all ${image.length} images`,data:image})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

// get one image

const getOneImage = async (req,res)=>{
    try {
        const {id} = req.params;
        const image = await Img.findById(id)
        res.status(200).json({message:"get single image",data:image})
    } catch (error){ 
      res.status(500).json({message:error.message})  
    }
}

// update image

const updateImage = async (req,res)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const image = await Img.findByIdAndUpdate(id,body,{new:true})
        if(!image){
            res.status(404).json({message:"image not found"})
        }
        res.status(200).json({message:"image update",date:image})
    } catch (error) {
      res.status(500).json({message:error.message})  
    }
}

//delete image

const deleteImage = async (req,res)=>{
    try {
        const {id} = req.params;
        const image = await Img.findByIdAndUpdate(id)
        res.status(200).json({message:"image deleted successufilly"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const imageLikes = async (req,res)=>{
    const imageId = req.params.id
    
    const image = await Img.findById(imageId)
    if(!image){
        return res.status(403).json({message:"Image not found"})
    }else{
        const userId = req.user._id
        if(image.like.includes(userId)){
            return res.status(401).json({message:"user already liked"})
        }else{
            if(image.dislike.includes(userId)){
                image.dislike.pull(userId)
            }else{
                image.like.push(userId)
                image.save()
                return res.status(201).json({message:`User called ${req.user.name} have successfuly liked this image`})
            }
        }
    }
}
const dislikeImage = async (req,res)=>{
    const imageId = req.params.id
    const image = await Img.findById(imageId)
    if(!image){
        return res.status(403).json({message:"Image not found"})
    }else{
        const userId = req.user._id
        if(image.dislike.includes(userId)){
            return res.status(401).json({message:"user already disliked"})
        }else{
            if(image.like.includes(userId)){
                image.like.pull(userId)
            }else{
                image.dislike.push(userId)
                image.save()
                return res.status(201).json({message:`User called ${req.user.name} have disliked on this image`})
            }
        }
    }
}
export {createImage,getImage,getOneImage,updateImage,deleteImage,imageLikes,dislikeImage}
