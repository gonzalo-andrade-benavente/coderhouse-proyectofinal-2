const CartDaoFactory = require('./DAOS/CartDaoMongo');
const { config } = require('./../config');

class CartDaosFactory {

    constructor() {
        this.DAO = config.persistence  === 'MONGO' ? new CartDaoFactory(): new CartDaoFactory(); // No se genero CartDaoMeM.js 
    }

    async create(){
        try {
            return this.DAO.create();
        } catch(err) {
            console.log(err);
        }
    }

    async deleteById(id) {
        try {
            return this.DAO.deleteById(id);
        }catch(err) {
            console.log(err);
        }
    }

    async getById(id){
        try{
            return this.DAO.getById(id);    
        }catch(err) {
            console.log(err);
        }
    }

}

module.exports = new CartDaosFactory();
