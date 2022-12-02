const express = require("express");
const router = express.Router();
const quoteController = require("../controller/quoteSchema.js");

router.get("/", quoteController.getAllQuote);
router.post("/", quoteController.addQuote);
router.get("/id", quoteController.getById);
router.delete("/id", quoteController.deleteQuotes);

module.exports = router;