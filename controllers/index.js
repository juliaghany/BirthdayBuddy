// index.js file for controllers folder
const router = require("express").Router();
const apiRoutes = require("./api")

// render the new gift form handlebar
router.get("/new-gift", (req, res) => {

    res.render("new-gift-form")
})

// render the new person form handlebar
router.get("/new-person", (req, res) => {

    res.render("new-person-form")
})

router.use("/api", apiRoutes)

module.exports = router;