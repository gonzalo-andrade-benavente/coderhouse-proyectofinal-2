const cors = require('cors');
const express = require('express');
const app = express();

const { config } = require('../config');


// MDW
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));

// CORS
app.use(cors(config.cors));


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