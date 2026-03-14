const express = require("express");
const router = express.Router();

/*
 * Route Prefix
 * /api/admin _____
 */

// admin auth routes
router.use("/login", require("./admin/auth/login.route"));
router.use("/register", require("./admin/auth/register.route"));

//  Home Page Route

router.use("/menu", require("./admin/menu.route"));
router.use("/slider", require("./admin/slider.route"));
router.use("/review", require("./admin/review.route"));
router.use("/team", require("./admin/team.route"));

router.use("/category", require("./admin/category.route"));
router.use("/blog", require("./admin/blog.route"));

router.use("/client-brand", require("./admin/client-brand.route"));
router.use("/contact-message", require("./admin/contact-message.route"));

router.use("/faq", require("./admin/faq.route"));

router.use("/service", require("./admin/service.route"));



router.use("/business-setting", require("./admin/business.route"));

module.exports = router;
