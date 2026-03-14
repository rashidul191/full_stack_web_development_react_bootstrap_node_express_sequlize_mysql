const express = require("express");
const router = express.Router();
const serviceController = require("../../controllers/admin/service.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("services");

router.get("/", serviceController.index); // index
router.post("/", upload.single("services"), serviceController.create);
router.get("/:id", serviceController.show); // show
router.put("/:id", upload.single("services"), serviceController.update); // edit then update
router.delete("/:id", serviceController.delete); // destroy

module.exports = router;
