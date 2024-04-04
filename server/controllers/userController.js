const bcrypt = require('bcrypt')
const UserModel = require('../models/Users')
const schemas = require('../schemas/users')
const jwt = require('jsonwebtoken')
const user_register = async(req,res)=>{

    try {
        const User = {
            username: req.body.username,
            email:req.body.email,
            password:req.body.password
        }
       const {error}= schemas.registerSchema.validate(req.body,{abortEarly:false})
       if(error){
        const messages = error.details.map((message)=> message.message);
        return res.status(400).json({
            message: messages
        })
       }
        const oldUser = await UserModel.findOne({email:User.email})
        if(oldUser){
            return res.status(400).json({
                message:"Email đã tồn tại"
            })
        }
        else{
            //hashpassword;
            const hashpassword = await bcrypt.hash(User.password,10)
            User.password = hashpassword;
            const userData = await UserModel.insertMany(User)
            return res.status(200).json({
                message:"Đăng ký thành công",
                data:userData
            })
        }
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}

const user_login = async(req,res)=>{
    try {
        const checkUser = await UserModel.findOne({email:req.body.email});
        if(!checkUser){
            return res.status(400).json({
                message:"User is Not Found",
            })
        }
       const isPasswordMatch = await bcrypt.compare(req.body.password,checkUser.password)
       if(isPasswordMatch){
        checkUser.password == undefined;
        const token = jwt.sign({ userId: checkUser._id }, "khoa-cua-ban", {
            expiresIn: "7d",
        });
        return res.status(200).json({
            data:checkUser,
            token
        })
       }
       else{
        return res.status(400).json({
            message:"Sai mật khẩu"
        })
       }
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
module.exports = {
    user_register,
    user_login
}