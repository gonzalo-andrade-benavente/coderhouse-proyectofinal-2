const validateId = (req, res, next) => {

    const { id } = req.params;

    if (id === undefined) {
        return res.status(400).json({message: 'Bad request, not id in put method'});
    }

    next();
}

module.exports = { validateId ,};