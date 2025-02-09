import nodemailer from "nodemailer"


const sendEmailToUser = (userInf)=>{

    let transiport = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:process.env.Email,
            pass:process.env.PASS,
        }
    })

    let mainOptions = {
        from:process.env.Email,
        to:userInf.email,
        subject:'Added user',
        html:`<p>You have new user created on your platform</p>`
    }

    transiport.sendMail(mainOptions,function(err,info){
        if(err){
            console.error(err)
        }else{
            console.info(info)
        }
    })

}
export default sendEmailToUser