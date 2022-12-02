const express = require("express");
const router = express.Router();
const arrivalController = require("../controller/arrivalController.js");

router.get("/", arrivalController.getAllArrival);
router.get("/id", arrivalController.getById);
router.delete("/id", arrivalController.deleteArrival);
router.post("/", arrivalController.addArrivals);
router.put("/id", arrivalController.updateArrival);

module.exports = router;
