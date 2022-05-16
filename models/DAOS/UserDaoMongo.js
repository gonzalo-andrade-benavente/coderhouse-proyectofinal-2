const { Schema, model } = require('mongoose');
const { userSchema } = require('./../schemas/user');
const UserSchema = new Schema(userSchema);
const UserModel = new model('Usuarios', UserSchema);

const Response = require('./../../utils/Response');
const Encrypt = require('./../../utils/Encrypt');
const encrypt = new Encrypt(10);
const Email = require('./../../utils/Email');
const { emailConfig } = require('../../config/index');
const email = new Email(emailConfig.user, emailConfig.pass, emailConfig.email, emailConfig.port, emailConfig.service);

class CartDaoMongo {


    async create(user) {
        let response;
        try  {
            user.password = encrypt.encript(user.password);
            user.timestamp = Date.now();
            const newUser = await UserModel.create(user);    
            response = new Response(false, newUser, undefined);
            email.sendMail(newUser);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }
        return response;
    }

}

module.exports = CartDaoMongo;