const express = require("express");
const router = express.Router();
const expertsController = require("../controller/expertsController.js");

router.get("/", expertsController.getAllExperts);
router.post("/", expertsController.addExperts);
router.get("/id", expertsController.getById);
router.put("/id", expertsController.updateExperts);
router.delete("/id", expertsController.deleteExperts);

module.exports = router;
