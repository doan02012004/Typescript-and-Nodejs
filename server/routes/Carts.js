const express = require('express');
const cartController = require('../controllers/cartsController')

const router = express.Router();
router.get("/:userId",cartController.getCartbyId)
router.post("/addtocart",cartController.addToCart)
router.post("/remove",cartController.removeCart)

module.exports = router;