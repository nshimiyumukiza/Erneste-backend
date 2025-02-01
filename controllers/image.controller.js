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
    res.status(200).json({message:"all images",data:image})
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
export {createImage,getImage,getOneImage,updateImage,deleteImage}
