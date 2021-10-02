const router = require('express').Router();
const { Consumer, Producer, Items } = require('../../models');


// Get all producer
router.get('/', async (req, res) => {
    try {
      const producerData = await Producer.findAll(req.body, {
        include: [Items]  
      });
      res.status(200).json(producerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   Find single producer
  router.get('/:id', async (req, res) => {
   
    try {
      const producerData = await Producer.findByPk(req.params.id);
      if (!producerData) {
        res.status(404).json({ message: "No consumer with this id" });
      }
      res.status(200).json(producerData);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
    const producerData = producerData.get({ plain: true });
    res.render('producer', producer);
  });


  // create a new producer
  router.post('/', (req, res) => {
    Producer.create({
      producer_name: req.body.producer_name
    })
      .then(dbProducerData => res.json(dbProducerData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  
  });

//   update a producer by its 'id' value
router.put('/:id', (req, res) => {
    Producer.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbProducerData => {
        if (!dbProducerData[0]) {
          res.status(404).json({ message: "No producer found with this id" });
          return;
        }
        res.json(dbProducerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  // delete a producer by its `id` value
  router.delete('/:id', (req, res) => {
    const deletedProducer = Producer.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.json(deletedProducer);
  });

  module.exports = router;


 
  