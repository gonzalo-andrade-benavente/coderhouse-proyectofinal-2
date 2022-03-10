const { Router } = require('express');

const validateRole = require('../users/middlewares/validateRole');

const validateId = require('./middlewares/validateId');

const cartController = require('./controllers/cartController');

module.exports = (app) => {

    const router = Router();

    app.use('/api/carritos', router);

    router.post('/', [ validateRole ] , cartController.postCart);

    router.delete('/:id?', [ validateRole, validateId ] , cartController.deleteCart);

    router.post('/:id/productos', [ validateRole ] , cartController.postCart);

    router.get('/:id/productos', cartController.postCart);

    router.delete('/:id/productos/:id_prod', [validateRole] , cartController.postCart);

}