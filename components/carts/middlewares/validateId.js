const Response  = require('../../../utils/Response');

const validateId = async (req, res, next) => {

    const { id } = req.params;

    let response;

    if ( id === undefined) {
        response = new Response(true, undefined, 'id not defined');
        return res.status(400).send(response);
    }

    
    next();

}

module.exports = validateId;