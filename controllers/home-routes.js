// reference Module 14 Activity 17 -> controllers -> home-routes.js
// reference Module 14 Activity 24 -> controllers -> homeRoutes.js

const router = require('express').Router();
const { Receiver, Gift, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        if (!req.session.logged_in) {
           return res.redirect('/login')
        }
        const receiverData = await Receiver.findAll({
            where: {
               user_id: req.session.user_id
           },
           
            attributes: [
                'id',
                'name',
                'birth_date',
            ]
        });

        const receivers = receiverData.map((receiver) =>
            receiver.get({ plain: true })
        );

        res.render('homepage', {
            receivers,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    console.log('it is working')
    res.render('login');
});




module.exports = router;