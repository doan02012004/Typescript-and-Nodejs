const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema( {
    name: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
},
{ timestamps: true, versionKey: false })
const CategoriesModel = mongoose.model("categories", categorySchema);
module.exports = CategoriesModel