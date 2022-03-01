const validateRole = async (req, res, next) => {

    console.log('Paso por validateRole');
    next();

}

module.exports = validateRole;