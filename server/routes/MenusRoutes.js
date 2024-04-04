const express = require('express');
const menusController = require('../controllers/menusController')

const router = express.Router();

router.get("/",menusController.menu_index)
router.get("/:id",menusController.menu_detail)
router.delete("/:id",menusController.menu_delete)
router.post("/",menusController.menu_post)
router.put("/:id",menusController.menu_update)

module.exports = router;