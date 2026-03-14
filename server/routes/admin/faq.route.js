const express = require("express");
const router = express.Router();
const faqController = require("../../controllers/admin/faq.controller");

router.get("/", faqController.index); // index
router.post("/", faqController.create);
router.get("/:id", faqController.show); // show
router.put("/:id", faqController.update); // edit then update
router.delete("/:id", faqController.delete); // destroy

module.exports = router;
