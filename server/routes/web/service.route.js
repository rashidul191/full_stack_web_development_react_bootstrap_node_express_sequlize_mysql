const express = require("express");
const router = express.Router();
const serviceController = require("../../controllers/web/service.controller");

router.get("/", serviceController.index); // index
router.get("/:id", serviceController.show); // show

module.exports = router;
