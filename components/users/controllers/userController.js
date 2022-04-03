const userService = require('../services/userService');

class UserController {

    async postRegister(req, res) {
        const { body } = req;
        const result = await userService.postUserDb(body);
        res.json(result);        
    }

    async getAuth(req, res) {
        const { email, password } = req.body;
        const result = await userService.getAuthDb(email, password);
        // Si result.data es que se autentico correctamente
        res.json(result);
    }


}

module.exports = new UserController();