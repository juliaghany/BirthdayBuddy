const router = require('express').Router();
const { Receiver, Gift } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new receiver
router.post('/', withAuth, async (req, res) => {
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

// GET one receiver by ID
router.get('/:id', withAuth, async (req, res) => {
    try {
        const receiverData = await Receiver.findByPk(req.params.id, {
            attributes: [
                'id',
                'name',
                'birth_date'
            ],
            include: [
                {
                    model: Gift,
                    attributes: ['id', 'description'],
                },
            ],
        });

        const receiver = receiverData.get({ plain: true });
        res.render('receiver', { receiver, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;