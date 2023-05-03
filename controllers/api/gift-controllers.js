const router = require("express").Router();
const Receiver = require("../../models/Receiver")

//  ---> /api/gift

// get all receivers
router.get("/", (req, res) => {
    Receiver.findAll()
    .then(result => {
        res.json(result)
    })
})

// create new gift
router.post("/", (req, res) => {
    console.log(req.body)
    Receiver.create({
        desription: req.body.desription,
        receiver_id
        //  id of the person who is logged in
        // user_id: 
    })
    .then((result) => {
        res.json(result)
    })
})


module.exports = router;