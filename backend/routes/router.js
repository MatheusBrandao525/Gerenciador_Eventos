const router = require("express").Router();

const serviceController = require("../controllers/serviceController");
// services router

const serviceRouter = require("./services");

router.use("/", serviceRouter);

module.exports = router;