const ProductsModel = require('../models/Products');

const products_index = async (req,res) =>{
 
  const { _page = 1, _limit = 10, _sort = "createdAt", _order = "asc", _expand } = req.query;
  const options = {
      page: _page,
      limit: _limit,
      sort: { [_sort]: _order === "desc" ? -1 : 1 },
  };
  const populateOptions = _expand ? [{ path: "category", select: "name" }] : [];
  try {
      const result = await ProductsModel.paginate(
          { categoryId: null },
          { ...options, populate: populateOptions }
      );
      if (result.docs.length === 0) throw new Error("No products found");

      // Populate category cho mỗi document trong result.docs
     
      const response = {
          data: result.docs,
          pagination: {
              currentPage: result.page,
              totalPages: result.totalPages,
              totalItems: result.totalDocs,
          },
      };
      return res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(400).json({
      message: "Get fail",
      error: error.message
    });
  }
}
const products_detail = async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await ProductsModel.findById(id)
        if(!product){
          return res.status(404).json({
              message:"Product Not Found",
          })
        }
        res.status(200).json({
           message:"Get ok",
           data: product,
        })
      } catch (error) {
       res.status(400).json({
           message:error.message,
        })
      }
}

const products_delete = async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await  ProductsModel.findByIdAndDelete({_id:id})
        if(!product){
            return res.status(404).json({
                message:"Product Not Found",
            })
        }
        res.status(200).json({
           message:"Delete ok",
           data: product,
        })
      } catch (error) {
       res.status(400).json({
           message:error.message,
        })
      }
}
const products_post = async (req,res)=>{
   try {
     const product = await ProductsModel.create(req.body)
     res.status(200).json({
        message:"Post ok",
        data: product,
     })
   } catch (error) {
    res.status(400).json({
        message:error.message,
     })
   }
    
}
const products_update = async (req,res)=>{
    try {
        const id = req.params.id;
        const product = await ProductsModel.findByIdAndUpdate(id,req.body,{
          new: true
        })
        if(!product){
          return res.status(404).json({
              message:"Product Not Found",
          })
      }
        res.status(200).json({
           message:"Update ok",
           data: product,
        })
      } catch (error) {
       res.status(404).json({
           message:error.message,
        })
      }
}
 const related = async (req, res) => {
  try {
      const product = await ProductsModel.find({
          category: req.params.categoryId,
          _id: { $ne: req.params.productId },
      });
      return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports ={
    products_index,
    products_detail,
    products_delete,
    products_post,
    products_update,
    related
}