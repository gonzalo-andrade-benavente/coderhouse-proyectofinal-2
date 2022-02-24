const { CartModel } = require('../models/Cart');
const { ProductModel } = require('../models/Product');
const Response = require('../utilities/Response');

const postEmptyCart = async () => {

    let result, response;

    try {
        result = await CartModel.create({
            timestamp: Date.now()
        });
        response = new Response(false, result, undefined);
    } catch (err) {
        response = new Response(true, undefined, `${err.name} - ${err.message}`);
    }

    return response;
}

const postCartProductById = async (id, id_prod) => {

    let cart, product, response;

    try {

        cart = await CartModel.findById(id);
        product = await ProductModel.findById(id_prod);
        cart.products = [...cart.products, product];
        await cart.save();

        response = new Response(false, cart, undefined);
    } catch (err) {
        response = new Response(true, undefined, `${err.name} - ${err.message}`);
    }

    return response;

}


module.exports = {
    postEmptyCart ,
    postCartProductById
}