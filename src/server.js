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
app.use('/product', productRouter);

app.get('/*', (req, res) => {
    res.json({
        error: -2,
        descripcion: 'ruta incorrecta'
    });
});

const server = app.listen(config.port, () => {
    console.log(`Server listening in port: ${config.port}`);
});


module.exports = server; 