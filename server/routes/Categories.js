const express = require('express');
const CategoriesController = require('../controllers/categories')

const router = express.Router();
router.get("/",CategoriesController.getAll)
router.post('/',CategoriesController.create)
module.exports = router;