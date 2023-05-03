// index.js for controllers -> api folder
const router = require("express").Router();
const receiverRoutes = require("./receiver-controllers")

router.use("/receiver", receiverRoutes)

module.exports = router;