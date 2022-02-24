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
        const cartProduct = cart.products.filter( prd => id_prod === prd._id.toString() );
        if (cartProduct.length > 0) {
            await CartModel.updateOne(
                { _id:id , "products._id": id_prod  } ,
                { $set: 
                    { 
                        "products.$.unidades" : (Number(cartProduct[0].unidades) + 1) , 
                        "products.$.total" : (Number(cartProduct[0].total) + product.precio)
                    } 
                }
            );
        } else {
            cart.products.push({
                _id: id_prod ,
                unidades: 1 ,
                total: product.precio ,  
            });
        }
        
        await cart.save();

        cart = await CartModel.findById(id);

        response = new Response(false, cart, undefined);
    } catch (err) {
        response = new Response(true, undefined, `${err.name} - ${err.message}`);
    }

    return response;

}

const getCartById = async (id) => {
    let result, response;

    try {
        result = await CartModel.findById(id);
        response = new Response(false, result, undefined);
    } catch(err) {
        response = new Response(true, undefined, `${err.name} - ${err.message}`);
    }

    return response;
}

const deleteCartById = async (id) => {
    let result, response;

    try {
        await CartModel.findByIdAndDelete(id);
        response = new Response(false, result, undefined);
    } catch(err) {
        response = new Response(true, undefined, `${err.name} - ${err.message}`);
    }

    return response;
}


module.exports = {
    deleteCartById ,
    getCartById ,
    postEmptyCart ,
    postCartProductById ,
}