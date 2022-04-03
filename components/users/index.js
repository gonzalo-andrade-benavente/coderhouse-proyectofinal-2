
const { Router } = require('express');
const passport = require('passport');

const router = Router();
const userController = require('./controllers/userController');

module.exports = app => {

    app.use('/api/usuarios', router);

    router.post('/registro', userController.postRegister);

    router.get('/login-ok' ,(req, res) => {
        res.json({
            passport: 'ok',
        })
    });

    router.get('/login-nok' ,(req, res) => {
        res.json({
            passport: 'nok',
        })
    });

    //router.get('/autenticarse', userController.getAuth);
    router.post('/login', passport.authenticate('login', { failureRedirect: '/api/usuarios/login-nok', successRedirect: '/api/usuarios/login-ok' }));


}