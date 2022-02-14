const { Router } = require('express');

const router = Router();

const { getProduct } = require('../controllers/product');

router.get('/:id?', getProduct );

module.exports = router;
