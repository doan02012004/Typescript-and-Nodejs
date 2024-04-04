const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get("/",productsController.products_index)
router.get("/:id",productsController.products_detail)
router.get("/:categoryId/related/:productId",productsController.related);
router.delete("/:id",productsController.products_delete)
router.post("/",productsController.products_post)
router.put("/:id",productsController.products_update)

module.exports = router;