const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ValueAttributeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    { timestamps: false, versionKey: false }
    
);
const ValueAttributeModel = mongoose.model("valueAttribute", ValueAttributeSchema);


const AttributeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        values: [
            {
                type: Schema.Types.ObjectId,
                ref: "valueAttribute",
            },
        ],
    },
    { timestamps: false, versionKey: false }
);
const AttributeModel =  mongoose.model("attribute", AttributeSchema);

module.exports = {
    ValueAttributeModel,
    AttributeModel
}