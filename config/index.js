require('dotenv').config();

const config = {
    port: process.env.PORT || 8080 ,
    cors: process.env.CORS ,
}

const databaseConfig = {
    user: process.env.MONGODB_USER ,
    password: process.env.MONGODB_PASSWORD ,
    host: process.env.MONGODB_HOST ,
    database: process.env.MONGODB_DATABASE ,
}

module.exports = {
    config, databaseConfig
}