const express = require('express');
const router = express.Router();


router.use('/api/items', require('./api/items'))



module.exports = router;