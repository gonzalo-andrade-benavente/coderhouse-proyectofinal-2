const { Router } = require('express');

const { validateCart } = require('../middlewares/validateCart');

const { 
        postCart ,
        postCartProduct , 
    } = require('../controllers/cart');

const router = Router();

router.post('/', postCart);

router.post('/:id?/productos', [ validateCart ], postCartProduct);

module.exports = router;
