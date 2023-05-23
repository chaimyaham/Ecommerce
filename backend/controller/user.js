const express=require('express');
const path=require('path');
const User=require('../model/user')
const router=express.Router();
const {upload}= require('../multer');
const ErrorHandler=require('../utils/ErrorHandler');
const fs=require('fs');
const jwt=require('jsonwebtoken');
const sendMail=require('../utils/sendMail');
const catchAsyncErrors=require('../middleware/catchAsyncErrors');
const sendToken=require('../utils/jwtToken')

router.post('/create-user', upload.single("file"), async (req,res,next)=>{
    const {name,email,password}=req.body;
    try{
        const userEmail=await User.findOne({email});

        if(userEmail){
            const filename=req.file.filename;
            const filePath=`uploads/${filename}`;
            fs.unlink(filePath,(err)=>{
                if(err){
                    console.log(err)
                    res.status(500).json({message:"error deleting file"})
                }
            })
            return next(new ErrorHandler("User already exist", 400))
    
        }
        const filename=req.file.filename;
        const fileUrl=path.join(filename)
        const avatar=fileUrl
        const user={name,email,password,avatar};
    
    
    //    const newUser=await User.create(user);
    //    res.status(201).json({success:true,newUser});


    const activationToken= createActivationToken(user);
    const activationUrl= `http://localhost:3000/activation/${activationToken}`;

    try{
        await sendMail({
            email:user.email,
            subject:"Activate your account",
            message:`hello ${user.name} please activate your account. click on the link to activate your account : ${activationUrl}`
        })
        res.status(201).json({success:true,message:`Please check your email :- ${user.email} to activate your account!`})

    }catch(error){
        return next(new ErrorHandler(error.message,500))
    }

    }catch(error){
        return next(new ErrorHandler(error.message),400)
    }

})

// create activation token
const createActivationToken=(user)=>{
    return jwt.sign(user,process.env.ACTIVATION_SECRET,{expiresIn:"5m",})
}


// activate user 
router.post("/activation", catchAsyncErrors(async(req,res,next)=>{
    try{
        const {activationToken}=req.body;
        const newUser=jwt.verify(activationToken,process.env.ACTIVATION_SECRET)

        if(!newUser){
            return next(new ErrorHandler("Invalid Token", 400))
        }
        const{name, email,password,avatar}=newUser;
        let user= await User.findOne({email});
        if(user){
            return next(new ErrorHandler("user already existed",400));
        }
        user=await User.create({name,email,password,avatar})
        sendToken(user,201,res);
    }catch(error){
        return next(new ErrorHandler(error.message,500))

    }
}))

// LOGIN USER routes

router.post('/login-user', catchAsyncErrors(async(req,res,next)=>{
    try {
        const {email, password} = req.body;
        if(!email||!password){
            return next(new ErrorHandler("Please Provide the All fields",400))
        }

        const user=await User.findOne({email}).select("+password")
        if(!user){
            return next(new ErrorHandler("User dosen't exist",400))
        }
        const isPasswordsValid = await user.comparePassword(password);

    } catch (error) {
        return next(new ErrorHandler(error.message,500))
    }
}))


module.exports=router