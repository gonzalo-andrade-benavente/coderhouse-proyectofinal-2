const bcrypt = require('bcryptjs');

class Encrypt {

    constructor(salt) {
        this.salt = salt;
    }

    encript(text) {
        
        let textEncrypt;

        try {
            textEncrypt = bcrypt.hashSync(text, this.salt);
        } catch (err) {
            throw new Error(`Error en encriptación ${err}`);
        }
        
        return textEncrypt; 
          
    }

    compare(text, textEncrypt)  {
        let result;

        try {
            result = bcrypt.compareSync(text, textEncrypt);
        } catch (err) {
            throw new Error(`Error en encriptación ${err}`);  
        }
        return result;
    }



}

module.exports = Encrypt;