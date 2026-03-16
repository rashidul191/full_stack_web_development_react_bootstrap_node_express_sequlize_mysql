const express = require("express");
const router = express.Router();

/*
 * Route Prefix
 * /api _____
 */

// web routes

router.use("/menu", require("./web/menu.route"));

router.use("/slider", require("./web/slider.route"));

router.use("/blog", require("./web/blog.route"));
router.use("/category", require("./web/category.route"));

router.use("/storie", require("./web/storie.route"));

router.use("/team", require("./web/team.route"));

router.use("/review", require("./web/review.route"));
router.use("/client-brand", require("./web/client-brand.route"));
router.use("/contact-message", require("./web/contact-message.route"));

router.use("/service", require("./web/service.route"));
router.use("/faq", require("./web/faq.route"));

router.use("/activity", require("./web/activity.route"));

router.use("/price", require("./web/price.route"));

router.use("/content-manage", require("./web/content-manage.route"));

router.use("/business-setting", require("./web/business.route"));

module.exports = router;
