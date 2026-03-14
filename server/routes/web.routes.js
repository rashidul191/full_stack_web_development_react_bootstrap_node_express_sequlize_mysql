const express = require("express");
const router = express.Router();

/*
 * Route Prefix
 * /api _____
 */
// user auth routes
router.use("/login", require("./auth/login.route"));
router.use("/register", require("./auth/register.route"));

// web routes
router.use("/slider", require("./web/slider.route"));

router.use("/blog", require("./web/blog.route"));
router.use("/category", require("./web/category.route"));

router.use("/team", require("./web/team.route"));

router.use("/client-brand", require("./web/client-brand.route"));
router.use("/contact-message", require("./web/contact-message.route"));

router.use("/service", require("./web/service.route"));
router.use("/faq", require("./web/faq.route"));

module.exports = router;
