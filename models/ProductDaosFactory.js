const ProductDaoMongo = require('./DAOS/ProductDaoMongo');
const ProductDaoMem = require('./DAOS/ProductDaoMem');
const { config } = require('./../config');

class ProductDaosFactory  {
    constructor() {
        this.DAO = config.persistence  === 'MONGO' ? new ProductDaoMongo() : new ProductDaoMem(); 
    }

    async getAll() {
        try  {
          return await this.DAO.getAll();    
        } catch(err)  {
            console.log(err);
        }
    }

    async getById(id)  {
        try  {
            return await this.DAO.getById(id);
        } catch(err)  {
            console.log(err);
        }    
    }

    async create(product) {
        try  {
            return await this.DAO.create(product);
        } catch(err)  {
            console.log(err);
        }    
    }

}

module.exports = new ProductDaosFactory();
