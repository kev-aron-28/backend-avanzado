const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server {
    constructor() {
        this.PORT = 3000;
        this.app = express();
        
        this.db();
        this.middlewares();
    }

    async db() {
        await dbConnection();
    }
    
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server listening in ${this.PORT}`);
        })
    }
};

module.exports = Server;