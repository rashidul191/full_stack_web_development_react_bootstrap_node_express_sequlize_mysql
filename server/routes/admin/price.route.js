const express = require("express");
const router = express.Router();
const priceController = require("../../controllers/admin/price.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("prices");

router.get("/", priceController.index); // index
router.post("/", upload.single("image"), priceController.create);
router.get("/:id", priceController.show); // show
router.put("/:id", upload.single("image"), priceController.update); // edit then update
router.delete("/:id", priceController.delete); // destroy

module.exports = router;
