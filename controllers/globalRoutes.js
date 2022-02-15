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


