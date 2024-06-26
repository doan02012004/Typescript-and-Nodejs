
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const cartSchema = new mongoose.Schema({
   userId:{
    type:Schema.Types.ObjectId,
    ref:"users",
    required:true,
   },
   products:[
       {
        productId:{
            type :Schema.Types.ObjectId,
            ref:"products",
            required:true,
        },
        quantity: {
            type: Number,
            required: true
        }
       }
   ]
},
{ 
    timestamps: true, versionKey: false 
})

const cartsModel = mongoose.model('carts',cartSchema)

module.exports = cartsModel