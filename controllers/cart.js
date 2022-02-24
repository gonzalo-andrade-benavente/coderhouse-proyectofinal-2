const { request, response } = require("express");

const { postEmptyCart, postCartProductById, getCartById, deleteCartById } = require('../services/cart');

const postCart = async (req = request, res = response) => {

    const result = await postEmptyCart();

    res.json({ data: result.data , });
}

const postCartProduct = async (req = request, res = response ) => {
    
    const { id } = req.params;
    const { id_prod } = req.body;

    const result = await postCartProductById(id, id_prod);

    res.json({ data: result.data , });
}

const getCart = async (req = request, res = response) => {
    const { id } = req.params;

    const result = await getCartById(id);

    res.json({ data: result.data ,});
}

const deleteCart = async (req, res) => {
    const { id } = req.params;

    const result = await deleteCartById(id);

    res.json({ data: result.data ,});

}

module.exports = {
    getCart ,
    postCart ,
    postCartProduct ,
}