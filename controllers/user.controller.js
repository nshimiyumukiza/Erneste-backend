import jwt from "jsonwebtoken"
import User from "../models/user.model.js";
import sendEmailToUser from "../utlies/email-notification.js";

// post user

const createUser = async(req,res,next)=>{
  try {
    
    const user = await User.create(req.body)
    const users = await User.find()
    users.map(userr =>{
      sendEmailToUser(userr)
    })
    res.status(201).json({message:"user created successfuly !!!",data:user})
  } catch (error) {
    res.status(403).json({message:error.message})
  }





}
  // login

  const login = async (req,res) =>{
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user){
        return res.status(403).json({message:"invalid email or passowrd"})
  
}else{
    const token = jwt.sign({user:user},process.env.SCRETKEY,{expiresIn:"1d"});
   return  res.status(201).json({message:"login successufly",token})
}

}


//get user


const getUser = async (req,res) =>{
    try {
        const user = await User.find({})
        res.status(201).json({message:"user created succefully.!!!",data:user})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//get user by id

const getSingleUsere = async (req,res)=>{
 const {id} = req.params;
 const user = await User.findById(id);
 if(!user){
 return res.status(404).json({message:"user not found"})
 }
 res.status(200).json({message:"get one user",data:user})
}

// updated user

const updateUser = async (req,res) =>{
try {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,req.body,{new:true});
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    res.status(200).json({message:"update user",data:user})
    
} catch (error) {
  res.status(500).json({message:error.message})  
}
}

const deleteUser = async (req,res) =>{
    try {
        const {id} = req.params;
      const user = await User.findByIdAndDelete(id) 
      if(!user){
        return res.status(404).json({message:"user not found"})
      } 
      res.status(200).json({message:"user deleted succefuly"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export { createUser,getUser,getSingleUsere,updateUser,deleteUser,login}