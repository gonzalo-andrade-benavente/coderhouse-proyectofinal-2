const { Router } = require('express');

const productController = require('../products/controllers/productController');

module.exports = (app) => {
    
    const router = Router();
    
    app.use('/api/productos', router);

    router.get('/', productController.getProduct);

}