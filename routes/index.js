const productRouter = require('../components/products/');
const cartRouter = require('../components/carts/');

module.exports = (app) => {

    productRouter(app);
    cartRouter(app);

    app.get('/', (req, res) => {
        res.json({
            message: 'ok'
        });
    });

    app.get('/healthcheck', (req, res) => {
        res.json({
            message: 'healthcheck ok!'
        });
    });
    
    app.get('/*', (req, res) => {
        res.status(403).json({
            message: 'Wrong route'
        });
    });
}






