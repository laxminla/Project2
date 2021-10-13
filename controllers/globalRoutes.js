const router = require('express').Router();
const Producer = require('../models/Producer');
const Consumer = require('../models/Consumer');
const Items = require('../models/Items');

router.get('/', (req, res) => {
    let hbsObject, producersArr, consumersArr, itemsArr;

    Producer.findAll()
        .then(data => {
            hbsObject = {
                producers: data[0]
            }
            // console.log(data[0]);
            Consumer.findAll()
                .then(data => {
                    hbsObject = {
                        ...hbsObject,
                        consumers: data[0]
                    }

                    Items.findAll()
                        .then(data => {
                            hbsObject = {
                                ...hbsObject,
                                items: data[0]
                            }
                            console.table(hbsObject);

                            res.render('homepage', hbsObject);
                        })
                })
        })


});







router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/login');
});

module.exports = router;