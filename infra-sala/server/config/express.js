var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports= function() {
    var app = express();

    app.use(cors({origin: 'http://localhost:4200'}));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}