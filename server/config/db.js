const mongoose = require('mongoose')
const connectDB = async(uri)=>{
    try {
         await mongoose.connect(uri);
         console.log("connect success!!")
    } catch (error) {
        console.log("connect fail")
    }
}

module.exports = connectDB