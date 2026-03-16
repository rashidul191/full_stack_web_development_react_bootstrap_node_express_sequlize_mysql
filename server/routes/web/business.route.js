const express = require("express");
const router = express.Router();
const businessController = require("../../controllers/web/business.controller");

router.get("/", businessController.index); // index
module.exports = router;
