const Encrypt =  require('../../../utils/Encrypt');
const encrypt = new Encrypt(10);

//const { UserModel } = require('../../../models/User');
const Response  = require('../../../utils/Response');
const { emailConfig } = require('../../../config/index');
const Email = require('../../../utils/Email');

const email = new Email(emailConfig.user, emailConfig.pass, emailConfig.email, emailConfig.port, emailConfig.service);

const UserDao =  require('./../../../models/UserDaosFactory');  

class UserService {

    async postUserDb(user) {
        
        let result;
        try {
            result = await UserDao.create(user);
        } catch(err) {
            console.log(err);
        }

        return result;

    }

    async getAuthDb(email, password) {
        let result, response;
        try {
            //result = await UserModel.findOne({email});
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
            //result = await UserModel.findOne({email});
        } catch(err) {
           console.log(err);
        }

        return result;
    }



}

module.exports = new UserService();