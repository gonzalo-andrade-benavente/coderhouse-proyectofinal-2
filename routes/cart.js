const { Router } = require('express');

const { validateCart } = require('../middlewares/validateCart');

const { 
        getCart ,
        postCart ,
        postCartProduct , 
    } = require('../controllers/cart');

const router = Router();

router.post('/', postCart);

router.post('/:id?/productos', [ validateCart ], postCartProduct);

router.get('/:id?/productos', [ validateCart], getCart);

module.exports = router;
