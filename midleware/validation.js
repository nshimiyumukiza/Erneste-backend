import { check, validationResult } from "express-validator";

const validationRule = async (req,res,next) =>{
    const error = validationResult(req)
    
    if(!error === error.isEmpty()){
        const message = error.array().map(err =>err.msg)
        return res.status(401).json({message:message})
    }else{
        return next()
    }


} 

const userAccountRule = () =>{
    return [
        check("email","correct your email").isEmail(),
        check("password","correct your password").isStrongPassword()

    ]
}

export {validationRule,userAccountRule}