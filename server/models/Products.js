const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')
const ProductsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
        },
        slug: {
            type: String,
            unique: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories",
            // required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
        },
        gallery: {
            type: Array,
        },
        description: {
            type: String,
        },
        discount: {
            type: Number,
            default: 0,
        },
        countInStock: {
            type: Number,
            default: 0,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        tags: {
            type: Array,
        },
        attributes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Attribute",
            },
        ],
    },
    { timestamps: true, versionKey: false }
);

ProductsSchema.plugin(mongoosePaginate);

const ProductsModel = mongoose.model("products", ProductsSchema);
module.exports = ProductsModel