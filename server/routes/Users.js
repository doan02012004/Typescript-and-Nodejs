const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.post("/register",userController.user_register)
router.post('/login',userController.user_login)

module.exports = router;
