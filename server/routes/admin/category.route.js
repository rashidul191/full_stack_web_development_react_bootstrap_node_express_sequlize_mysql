const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/admin/category.controller");
const uploadFile = require("../../middleware/upload.middleware");
const upload = uploadFile("categoris");

router.get("/", categoryController.index); // index
router.post("/", upload.single("image"), categoryController.create);
router.get("/:id", categoryController.show); // show
router.put("/:id", upload.single("image"), categoryController.update); // edit then update
router.delete("/:id", categoryController.delete); // destroy

// router.get("/", blogController.index); // index
// router.post("/", blogController.create); // create
// router.get("/:id", blogController.show); // show
// router.put("/:id", blogController.update); // edit then update
// router.delete("/:id", blogController.delete); // destroy

module.exports = router;
