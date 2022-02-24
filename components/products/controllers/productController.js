
class Product {
    
    async getProduct(req, res) {
        res.send({
            msg: 'getProduct' ,
        });
    }
    
}

module.exports = new Product();