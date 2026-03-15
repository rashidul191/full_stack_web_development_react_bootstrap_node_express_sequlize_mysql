const express = require("express");
const router = express.Router();
const priceController = require("../../controllers/web/price.controller");

router.get("/", priceController.index); // index
router.get("/:slug", priceController.show); // show


module.exports = router;
