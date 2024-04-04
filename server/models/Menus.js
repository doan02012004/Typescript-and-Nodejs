const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: String,
    path:String
})
const MenusModel = mongoose.model("menus", MenuSchema);
module.exports = MenusModel