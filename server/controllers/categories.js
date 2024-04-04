const CategoriesModel = require('../models/Categories')
const ProductsModel = require('../models/Products');
const slugify = require('slugify')
const create = async (req, res) => {
    try {
        const categoy = await CategoriesModel.create({
            name: req.body.name,
            slug: slugify(req.body.name, "-"),
        });
        return res.status(200).json(categoy);
    } catch (error) {
        return res.status(400).json({ error });
    }
};
const getAll = async (req, res) => {
    try {
        const categories = await CategoriesModel.find({});
        if (categories.length === 0) {
            return res.status(400).json({ message: "Không có danh mục nào!" });
        }
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};
const getCategoryById = async (req, res) => {
    // GET /categories/65fef32d75398a9a92b694da
    // { name: "Danh mục 1", products: []}
    try {
        const products = await ProductsModel.find({ category: req.params.id });
        const category = await CategoriesModel.findById(req.params.id);
        if (category.length === 0)
            return res
                .status(400)
                .json({ message: "Không tìm thấy sản phẩm nào!" });
        return res.status(200).json({
            category,
            products,
        });
    } catch (error) {
        return res.status(400).json({ error });
    }
};
const deleteCategoryById = async (req, res) => {
    try {
        const category = await CategoriesModel.findByIdAndDelete(req.params.id);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({ error });
    }
};
 const updateCategoryById = async (req, res) => {
    try {
        const category = await CategoriesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({ error });
    }
};
module.exports = {
    create,
    getAll,
    getCategoryById,
    deleteCategoryById,
    updateCategoryById
}
