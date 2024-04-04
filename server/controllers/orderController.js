const Order = require('../models/Order');
const httpstatuscode = require('http-status-codes');
const StatusCodes = httpstatuscode.StatusCodes
// Controller để tạo mới một đơn hàng
 const createOrder = async (req, res) => {
  
        try {
            const { userId, items, totalPrice, customerInfo } = req.body;
            const order = await Order.create({ userId, items, totalPrice, customerInfo });
            return res.status(StatusCodes.CREATED).json(order);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
};

// Controller để lấy tất cả đơn hàng
 const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để lấy một đơn hàng theo ID
 const getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để cập nhật thông tin của một đơn hàng
 const updateOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const { userId, items, totalPrice, status } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { userId, items, totalPrice, status },
            { new: true }
        );
        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để xóa một đơn hàng
 const deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    deleteOrder,
    updateOrder,
    getOrderById,
    getAllOrders,
    createOrder
}