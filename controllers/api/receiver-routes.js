const router = require('express').Router();
const { Receiver, Gift } = require('../../models');

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

// GET one receiver by ID
router.get('/:id', async (req, res) => {
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

// CREATE new gift for a receiver
router.post('/:receiver_id/gifts', async (req, res) => {
    try {
        const newGift = await Gift.create({
            description: req.body.description,
            receiver_id: req.params.receiver_id
        });

        res.status(200).json(newGift);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// GET all gifts for a receiver
router.get('/:receiver_id', async (req, res) => {
    try {
        const gifts = await Gift.findAll({
            where: { receiver_id: req.params.receiver_id }
        });
        res.status(200).json(gifts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELETE a gift for a receiver
router.delete('/:receiver_id/gifts/:gift_id', async (req, res) => {
    try {
        const gift = await Gift.destroy({
            where: {
                id: req.params.gift_id,
                receiver_id: req.params.receiver_id,
            },
        });

        if (!gift) {
            res.status(404).json({ message: 'No gift found with this id' });
            return;
        }

        res.status(200).json({ message: 'Gift successfully deleted' });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;