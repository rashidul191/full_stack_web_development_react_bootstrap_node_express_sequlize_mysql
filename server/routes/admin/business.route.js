const express = require("express");
const router = express.Router();
const businessController = require("../../controllers/admin/business.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("business-settings");

router.get("/", businessController.index); // index
router.put("/", upload.any(), businessController.update);
module.exports = router;
