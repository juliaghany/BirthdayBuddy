const router = require('express').Router();
const Receiver = require('../../models/Receiver');

router.post('/', async (req, res) => {
    console.log("i'm working!!")
    try {
        const newReceiver = await Receiver.create({
            name: req.body.name,
            birth_date: req.body.birthday,
            user_id: req.session.user_id
        });

        res.status(200).json(newReceiver);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const receiverData = await Receiver.findAll({
        });


        const receivers = receiverData.map((receiver) =>
            receiver.get({ plain: true })
        );

        res.render('new-person-form', { receivers });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;