const router = require('express').Router();
const { Gift } = require('../../models');

// CREATE new gift for a receiver
router.post('/', async (req, res) => {
    try {
        const newGift = await Gift.create({
            ...req.body,
            user_id: req.session.user_id 
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
router.delete('/:id', async (req, res) => {
    try {
        const gift = await Gift.destroy({
            where: {
                id: req.params.id,
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


// // GET all gifts for a receiver
// router.get('/:receiver_id/gifts', async (req, res) => {
//     try {
//         const gifts = await Gift.findAll({
//             where: { receiver_id: req.params.receiver_id }
//         });
//         res.status(200).json(gifts);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // DELETE a gift by id
// router.delete('/gifts/:id', async (req, res) => {
//     try {
//         const gift = await Gift.destroy({
//             where: { id: req.params.id }
//         });
//         if (!gift) {
//             res.status(404).json({ message: 'No gift found with this id' });
//             return;
//         }

//         res.status(200).json(gift);

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

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

module.exports = router