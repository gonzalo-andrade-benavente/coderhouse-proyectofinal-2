const cors = require('cors');
const express = require('express');
const app = express();

const { config } = require('../config');
const databaseConnection = require('../config/databseConnection');

const productRouter = require('../routes/product');

// MDW
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));

// DB
( async () => {
    await databaseConnection.connect();
})();

// CORS
app.use(cors(config.cors));

//
app.use('/api/product', productRouter);

app.use('/healthcheck', (req, res) => {
    res.json({
        message: 'healthcheck ok!'
    });
});

app.get('/*', (req, res) => {
    res.status(403).json({
        message: 'Wrong route'
    });
});

const server = app.listen(config.port, () => {
    console.log(`Server listening in port: ${config.port}`);
});


module.exports = server; 