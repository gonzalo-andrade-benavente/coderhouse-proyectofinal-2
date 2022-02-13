require('dotenv').config();

const config = {
    port: process.env.PORT || 8080 ,
    cors: process.env.CORS ,
}

module.exports = {
    config
}