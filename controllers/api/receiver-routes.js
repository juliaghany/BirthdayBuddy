const router = require('express').Router();
const Receiver = require('../../models/Receiver');

// CREATE new receiver
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

// router.get('/', async (req, res) => {
//     try {
//         const receiverData = await Receiver.findAll({
//         });


//         const receivers = receiverData.map((receiver) =>
//             receiver.get({ plain: true })
//         );

//         res.render('receiver', { receivers });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// GET one receiver by ID
router.get('/:id', async (req, res) => {
    try {
        const receiverData = await Receiver.findByPk(req.params.id, {
            attributes: [
                'id',
                'name',
                'birth_date'
            ]
        });

        const receiver = receiverData.get({ plain: true });
        res.render('receiver', { receiver, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;