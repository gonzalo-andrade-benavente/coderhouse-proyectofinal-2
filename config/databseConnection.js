const mongoose = require('mongoose');
const { databaseConfig } = require('./index');

class DatabaseConnection {

    constructor() {
        
        this.MONGO_ATLAS_URI = `mongodb+srv://${databaseConfig.user}:${databaseConfig.password}@${databaseConfig.host}/${databaseConfig.database}?retryWrites=true&w=majority`;
        this.connection = null;
    }

    connect = async () => {
        try {
            this.connection = await mongoose.connect(this.MONGO_ATLAS_URI);
            console.log('Database connected');
        } catch (err) {
            console.log(err);
        }
    }


}

module.exports = new DatabaseConnection;



