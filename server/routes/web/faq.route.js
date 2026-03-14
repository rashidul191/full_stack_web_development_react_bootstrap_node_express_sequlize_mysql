const express = require("express");
const router = express.Router();
const faqController = require("../../controllers/web/faq.controller");

router.get("/", faqController.index); // index
router.get("/:id", faqController.show); // show


module.exports = router;
