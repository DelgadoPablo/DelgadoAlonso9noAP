const express = require('express');
const cors = require('cors');
const dbConnection = require('./db/config');

const { PORT } = require('./config');

class Server
{
    constructor(){
        this.app = express();
        this.port = PORT;

        this.conectDB();
        this.middlewares();
        this.routes();
    }

    async conectDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    
    routes(){
        this.app.use('/', require('./routes/transacion.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`This Server is running in: http://localhost:${this.port}/`);
        })
    }

}


module.exports = Server;