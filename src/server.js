const cors = require('cors');
const express = require('express');
const app = express();

const { config } = require('../config');
const databaseConnection = require('../config/databaseConnection');

//const productRouter = require('../routes/product');
//const cartRouter = require('../routes/cart');

const serverRoutes = require('../routes');

// DB
( async () => {
    await databaseConnection.connect();
})();

// MDW
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));


// CORS
app.use(cors(config.cors));

// Routers
serverRoutes(app);

//app.use('/api/productos', productRouter);
//app.use('/api/carritos', cartRouter);

const server = app.listen(config.port, () => {
    console.log(`Server listening in port: ${config.port}`);
});


module.exports = server; 