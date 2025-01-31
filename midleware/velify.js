import jwt from "jsonwebtoken"
const VelifyAccess = (passRole) =>{
   return  (req,res,next) =>{
       const token = req.headers["auth"]
       if(!token){
        return res.status(403).json({message:"Token not found"})
       }else{
        try {
            const velifyToken = jwt.verify(token,process.env.SCRETKEY,{expiresIn:"1d"})
            req.user = velifyToken.user
            if(passRole !== velifyToken.user.role){
               return res.status(401).json({message:"You don't have access"})
            }else{
               return next()
            }
        } catch (error) {
            if(error.name="JsonWebTokenError"){
                return res.status(401).json({message:"Invalid token or expired"})
            }
        }
       
       }
   }
}
export default VelifyAccess