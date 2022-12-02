const express = require("express");
const router = express.Router();
const logoController = require("../controller/logoController.js");

router.get("/", logoController.getAllLogo);
router.get("/:id", logoController.getById);
router.put("/:id", logoController.updateLogo);

module.exports = router;
