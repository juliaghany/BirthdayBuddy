const router = require('express').Router();
const Receiver = require('../models/Receiver');

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