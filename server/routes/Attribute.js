const express = require('express');
const {
    createAttribute,
    createValueAttribute,
    deleteAttribute,
    getAllAttributes,
    getAttributeById,
    updateAttribute,
} = require('../controllers/attributeController')

const router = express.Router();
// Route để tạo mới một thuộc tính
router.post("/", createAttribute);

// Route để thêm giá trị cho thuộc tính đã tồn tại
router.post("/:id/values", createValueAttribute);

// Route để lấy tất cả các thuộc tính
router.get("/", getAllAttributes);

// Route để lấy một thuộc tính theo ID
router.get("/:id", getAttributeById);

// Route để cập nhật một thuộc tính theo ID
router.put("/:id", updateAttribute);

// Route để xóa một thuộc tính theo ID
router.delete("/:id", deleteAttribute);

module.exports =  router;