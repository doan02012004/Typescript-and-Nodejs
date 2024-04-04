const express = require('express');
const OrderController = require('../controllers/orderController')
const router = express.Router();

// Route để tạo mới một đơn hàng
router.post("/", OrderController.createOrder);

// Route để lấy tất cả đơn hàng
router.get("/",OrderController.getAllOrders);

// Route để lấy một đơn hàng theo ID
router.get("/:id", OrderController.getOrderById);

// Route để cập nhật thông tin của một đơn hàng
router.put("/:id", OrderController.updateOrder);

// Route để xóa một đơn hàng
router.delete("/:id", OrderController.deleteOrder);

module.exports = router