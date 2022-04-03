const { Schema, model } = require('mongoose');

const { userSchema } = require('./schemas/user');

const UserSchema = new Schema(userSchema);

const UserModel = new model('Usuarios', UserSchema);

module.exports = {
    UserModel
}