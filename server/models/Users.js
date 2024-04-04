const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String, required:true,minLength:6}
},
{ 
    timestamps: true, versionKey: false 
})
userSchema.index({username:1,email:1});
const usersModel = mongoose.model('users',userSchema)

module.exports = usersModel