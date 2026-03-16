const express = require("express");
const router = express.Router();
const reviewController = require("../../controllers/web/review.controller");

router.get("/", reviewController.index); // index
router.get("/:slug", reviewController.show); // show


module.exports = router;
