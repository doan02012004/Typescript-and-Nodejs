const MenusModel = require('../models/Menus');

const menu_index = async (req,res) =>{
    try {
        const menus = await MenusModel.find()
        res.status(200).json({
           message:"Get ok",
           data: menus,
        })
      } catch (error) {
       res.status(400).json({
           message:"Get fail",
        })
      }
}
const menu_detail = async(req,res)=>{
    try {
        const id = req.params.id;
        const menu = await MenusModel.findById(id)
        if(!menu){
          return res.status(404).json({
              message:"Product Not Found",
          })
        }
        res.status(200).json({
           message:"Get ok",
           data: menu,
        })
      } catch (error) {
       res.status(400).json({
           message:error.message,
        })
      }
}

const menu_delete = async(req,res)=>{
    try {
        const id = req.params.id;
        const menu = await  MenusModel.findByIdAndDelete({_id:id})
        if(!menu){
            return res.status(404).json({
                message:"Product Not Found",
            })
        }
        res.status(200).json({
           message:"Delete ok",
           data: menu,
        })
      } catch (error) {
       res.status(400).json({
           message:error.message,
        })
      }
}
const menu_post = async (req,res)=>{
   try {
     const menu = await MenusModel.create(req.body)
     res.status(200).json({
        message:"Post ok",
        data: menu,
     })
   } catch (error) {
    res.status(400).json({
        message:error.message,
     })
   }
    
}
const menu_update = async (req,res)=>{
    try {
        const id = req.params.id;
        const menu = await MenusModel.findByIdAndUpdate(id,req.body,{
          new: true
        })
        if(!menu){
          return res.status(404).json({
              message:"Product Not Found",
          })
      }
        res.status(200).json({
           message:"Update ok",
           data: menu,
        })
      } catch (error) {
       res.status(404).json({
           message:error.message,
        })
      }
}
module.exports ={
    menu_index,
    menu_detail,
    menu_delete,
    menu_post,
    menu_update
}