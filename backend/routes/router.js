const router = require("express").Router();

const serviceController = require("../controllers/serviceController");
// services router

const serviceRouter = require("./services");

router.use("/", serviceRouter);

const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;