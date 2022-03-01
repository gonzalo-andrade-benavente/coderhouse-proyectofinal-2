const { Router } = require('express');

const productController = require('../products/controllers/productController');

const validaterRole  = require('../users/middlewares/validateRole');

module.exports = (app) => {
    
    const router = Router();
    
    app.use('/api/productos', router);

    router.get('/:id?', productController.getProduct);

    router.post('/', [ validaterRole ] ,productController.postProduct);

    router.delete('/:id?', [ validaterRole ], productController.deleteProduct);

}