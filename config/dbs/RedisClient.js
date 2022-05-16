const redis = require('redis');

class Redis {

    static connect;

    constructor() {
        if (Redis.connect)  return Redis.connect;

        this.client = redis.createClient({
            host: '127.0.0.1' ,
            port: 6479
        });

        Redis.connect = this.client;
    }

    async connect(){
        this.events();
        await this.client.connect();
    }

    async events(){
        this.client.on('connect', async()  => {
            console.log('Redis conectado!');
        });

        this.client.on('error', (err) => {
            console.log('Un error de conexión');
        });
    }


}

module.exports = new Redis();