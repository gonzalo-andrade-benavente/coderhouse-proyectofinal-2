const UserDaoFactory = require('./DAOS/UserDaoMongo');
const { config } = require('./../config');

class UserDaosFactory {

    constructor() {
        this.DAO = config.persistence  === 'MONGO' ? new UserDaoFactory(): new UserDaoFactory(); // No se genero UserDaoMeM.js 
    }

    async create(user) {
        try  {
            return await this.DAO.create(user);
        }catch(err) {
            console.log(err);
        }
    }

}

module.exports = new UserDaosFactory();