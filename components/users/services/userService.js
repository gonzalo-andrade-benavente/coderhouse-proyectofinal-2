const Encrypt =  require('../../../utils/Encrypt');
const encrypt = new Encrypt(10);

const { UserModel } = require('../../../models/User');
const Response  = require('../../../utils/Response');
const { emailConfig } = require('../../../config/index');
const Email = require('../../../utils/Email');

const email = new Email(emailConfig.user, emailConfig.pass, emailConfig.email, emailConfig.port, emailConfig.service);

class UserService {

    async postUserDb(user) {
        
        let result, response;
        
        try {
            user.password = encrypt.encript(user.password);
            user.timestamp = Date.now();
            result = await UserModel.create(user);
            response = new Response(false, result, undefined);
            email.sendMail(result);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async getAuthDb(email, password) {
        let result, response;
        try {
            result = await UserModel.findOne({email});
            if (result !== null) {
                result = encrypt.compare(password, result.password);
            }
            response = new Response(false, result, undefined);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async getUserDb(email) {
        let result;
        try {
            result = await UserModel.findOne({email});
        } catch(err) {
           console.log(err);
        }

        return result;
    }



}

module.exports = new UserService();