const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController.js");

router.get("/", contactController.getAllContact);
router.post("/", contactController.addContact);
router.get("/id", contactController.getById);
router.delete("/id", contactController.deleteContact);

module.exports = router;
