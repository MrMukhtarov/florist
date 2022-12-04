const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController.js");

router.get("/", categoryController.getAllCategory);
router.post("/", categoryController.addCategory);
router.delete("/:id", categoryController.deleteCategory);
router.get("/:d", categoryController.getById);
router.put("/:id", categoryController.updateCategory);

module.exports = router;
