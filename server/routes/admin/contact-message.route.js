const express = require("express");
const router = express.Router();
const contactMessageController = require("../../controllers/admin/contact-message.controller");

router.get("/", contactMessageController.index); // index
router.get("/:id", contactMessageController.show); // show
router.delete("/:id", contactMessageController.delete); // destroy

module.exports = router;
