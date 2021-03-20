const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors')

module.exports = () => {
    const app = express();

    var corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors(corsOptions))

    consign()
        .include('controllers')
        .into(app);
    
    return app;
}