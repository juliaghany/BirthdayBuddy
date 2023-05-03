const router = require("express").Router();
const Receiver = require("../../models/Receiver")

//  ---> /api/receiver

// get all receivers
router.get("/", (req, res) => {
    Receiver.findAll()
    .then(result => {
        res.json(result)
    })
})

// create new person/receiver
router.post("/", (req, res) => {
    console.log(req.body)
    Receiver.create({
        name: req.body.name,
        birth_date: req.body.birth_date
        //  id of the person who is logged in
        // user_id: 
    })
    .then((result) => {
        res.json(result)
    })
})


module.exports = router;