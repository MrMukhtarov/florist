const express = require("express");
const router = express.Router();
const postController = require("../controller/postController.js");

router.get("/", postController.getAllPost);
router.post("/", postController.addPost);
router.get("/id", postController.getById);
router.put("/id", postController.updatePost);
router.delete("/id", postController.deletePost);

module.exports = router;