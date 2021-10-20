const router = require('express').Router();
const { Producer, Consumer, Items, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
});


router.get('/producer', async (req, res) => {
    res.render('producer');
});

router.get('/consumer', async (req, res) => {
    res.render('consumer');
});


router.get('/items', async (req, res) => {
    res.render('items');
});

router.get('/profile', async (req, res) => {
    res.render('profile');
})




router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/login');
});



module.exports = router;


// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Project }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('profile', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/login', (req, res) => {
//     // If the user is already logged in, redirect the request to another route
//     if (req.session.logged_in) {
//         res.redirect('/profile');
//         return;
//     }

//     res.render('login');
// });

// module.exports = router;
