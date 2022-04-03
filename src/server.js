const bcrypt = require('bcryptjs');
const cors = require('cors');
const express = require('express');
const localStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo');
const passport = require('passport');
const session = require('express-session');
const winston = require('winston');

const AdvancedOptions = { useNewUrlParser: true, useUnifiedTopology: true} ;
const app = express();
const { config } = require('../config');
const databaseConnection = require('../config/databaseConnection');
const serverRoutes = require('../routes');
const userService = require('../components/users/services/userService');

// Logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: '../utils/logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: '../utils/logs/warn.log', level: 'warn' }),
        new winston.transports.Console()
    ]
});


// DB
( async () => {
    await databaseConnection.connect();
})();

// MDW
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/../public'));
app.use('/resources', express.static(__dirname + '/../images'));


// CORS
app.use(cors(config.cors));

// Session
app.use(session({
    store: MongoStore.create({
        mongoUrl: databaseConnection.MONGO_ATLAS_URI,
        mongoOptions: AdvancedOptions
    }),
    secret: '123456789',
    resave: false,
    saveUninitialized: false,
    expires: 60000,
    cookie: {
        expires: 60000, // 1 minute
        secure: false,
        httpOnly: false
    }
}));

// Passport Config
passport.use('login', new localStrategy( async (username, password, done) => {
    const user = await userService.getUserDb(username);
   
    if (!user) return done(null, false);

    // Cambiar para comparar con bcrypt.
    //if (user.password !== password) return done(null, false);
    if (!bcrypt.compareSync(password, user.password)) return done(null, false);

    return done(null, user);

}));

passport.serializeUser( (user, done) => {
    done(null, user.email);
});

passport.deserializeUser( async (username, done) => {
    const user = await userService.getUserDb(username);
    done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());



// Routers
serverRoutes(app);

//app.use('/api/productos', productRouter);
//app.use('/api/carritos', cartRouter);

const server = app.listen(config.port, () => {
    logger.info(`Server listening in port: ${config.port}`);
});


module.exports = server; 