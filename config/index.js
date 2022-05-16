require('dotenv').config();

const config = {
    port: process.env.PORT || 8080 ,
    cors: `${process.env.CORS}` ,
    dev: process.env.NODE_ENV !== 'production' ,
    persistence: process.env.PERSISTENCE ,
}

const databaseConfig = {
    user: process.env.MONGODB_USER ,
    password: process.env.MONGODB_PASSWORD ,
    host: process.env.MONGODB_HOST ,
    database: process.env.MONGODB_DATABASE ,
}

const emailConfig = {
    user: process.env.EMAIL_USER ,
    pass: process.env.EMAIL_PASS ,
    email: process.env.EMAIL_ADMIN ,
    port: process.env.EMAIL_PORT ,
    service: process.env.EMAIL_SERVICE ,
}

module.exports = {
    config, databaseConfig, emailConfig
}