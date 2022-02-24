const productRouter = require('../components/products/');

module.exports = (app) => {

    productRouter(app);
    
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






