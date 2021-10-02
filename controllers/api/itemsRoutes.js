const router = require('express').Router();
const { Consumer, Producer, Items } = require('../../models');


// Get all items
router.get('/', async (req, res) => {
    try {
      const itemsData = await Items.findAll(req.body, {
        include: [Producer, Consumer]  
      });
      res.status(200).json(itemsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   Find single items
  router.get('/:id', async (req, res) => {
   
    try {
      const itemsData = await Items.findByPk(req.params.id);
      if (!itemsData) {
        res.status(404).json({ message: "No items with this id" });
      }
      res.status(200).json(itemsData);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
    const itemsData = itemsData.get({ plain: true });
    res.render('items', items);
  });


  // create a new items
  router.post('/', (req, res) => {
    Items.create({
      items_name: req.body.items_name
    })
      .then(dbItemsData => res.json(dbItemsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  
  });

//   update a item by its 'id' value
router.put('/:id', (req, res) => {
    Items.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbItemsData => {
        if (!dbItemsData[0]) {
          res.status(404).json({ message: "No item found with this id" });
          return;
        }
        res.json(dbItemsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  // delete a item by its `id` value
  router.delete('/:id', (req, res) => {
    const deletedItem = Items.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.json(deletedItem);
  });

  module.exports = router;


 
  