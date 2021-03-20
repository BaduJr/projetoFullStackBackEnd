const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors')

module.exports = () => {
    const app = express();

    //origin: 'http://localhost:4200',
    // var corsOptions = {
    //     origin: 'http://demoappfullstack.s3-website-sa-east-1.amazonaws.com/',
    //     optionsSuccessStatus: 200
    // }
    cors: {
        origin: ["http://demoappfullstack.s3-website-sa-east-1.amazonaws.com/","http://localhost:4200"]
    }
    
    app.all('*', function(req, res, next) {
        let origin = req.headers.origin;
        if(cors.origin.indexOf(origin) >= 0){
            res.header("Access-Control-Allow-Origin", origin);
        }         
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    //app.use(cors(corsOptions))

    consign()
        .include('controllers')
        .into(app);
    
    return app;
}