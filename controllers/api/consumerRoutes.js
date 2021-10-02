const router = require('express').Router();
const { Consumer, Producer, Items } = require('../../models');


// Get all consumer
router.get('/', async (req, res) => {
    try {
      const consumerData = await Consumer.findAll(req.body, {
        include: [Items]  
      });
      res.status(200).json(consumerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   Find single consumer
  router.get('/:id', async (req, res) => {
   
    try {
      const consumerData = await Consumer.findByPk(req.params.id);
      if (!consumerData) {
        res.status(404).json({ message: "No consumer with this id" });
      }
      res.status(200).json(consumerData);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
    const consumerData = consumerData.get({ plain: true });
    res.render('consumer', consumer);
  });


  // create a new consumer
  router.post('/', (req, res) => {
    Consumer.create({
      consumer_name: req.body.consumer_name
    })
      .then(dbConsumerData => res.json(dbConsumerData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  
  });

//   update a consumer by its 'id' value
router.put('/:id', (req, res) => {
    Consumer.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbConsumerData => {
        if (!dbConsumerData[0]) {
          res.status(404).json({ message: "No consumer found with this id" });
          return;
        }
        res.json(dbConsumerData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  // delete a consumer by its `id` value
  router.delete('/:id', (req, res) => {
    const deletedConsumer = Consumer.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.json(deletedConsumer);
  });

  module.exports = router;


 
  