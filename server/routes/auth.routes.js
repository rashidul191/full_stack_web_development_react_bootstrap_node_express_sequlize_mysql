const express = require("express");
const router = express.Router();

/*
 * Route Prefix
 * /api _____
 */

// user auth routes
router.use("/login", require("./auth/login.route"));
router.use("/register", require("./auth/register.route"));

// admin auth routes
router.use("/admin/login", require("./admin/auth/login.route"));
router.use("/admin/register", require("./admin/auth/register.route"));

module.exports = router;
