const express = require('express');
const router = express.Router();
const itemsController = require('../../controller/items_controller');


router.get('/', itemsController.items );


router.post('/create', itemsController.createItem);


router.delete('/:itemID', itemsController.deleteItem);


router.put('/:itemID/update', itemsController.updateItem)



module.exports = router;