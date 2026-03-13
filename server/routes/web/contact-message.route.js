const express = require("express");
const router = express.Router();
const contactMessageController = require("../../controllers/web/contact-message.controller");

router.post("/", contactMessageController.create); // post

module.exports = router;
