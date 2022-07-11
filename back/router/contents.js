const { contentsController } = require("../controller/index");
const { findAll, findByCategory, createOne, updateById, deleteById } =
  contentsController;
const express = require("express");
const router = express.Router();

// 로컬호스트/ http://localhost:5050/contents/

router.get("/", findAll);
router.get("/:category", findByCategory);
router.post("/", createOne);
router.put("/:id", updateById);
router.delete("/:id", deleteById);
module.exports = router;
