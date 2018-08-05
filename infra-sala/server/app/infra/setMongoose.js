var dbConfig = require('./db');
var mongoose = require('mongoose');

module.exports = function () {
    mongoose.Promise = global.Promise;
    if (process.env.NODE_ENV != 'test') {
        return mongoose.connect(dbConfig.DB, { useNewUrlParser: true } ).then(
            () => console.log('Conectado ao mongoDB.'),
            err => console.log('Erro ao conectar com mongoDB')
        );
    }
    if (process.env.NODE_ENV == 'test') {
        return mongoose.connect(dbConfig.test, { useNewUrlParser: true }).then(
            () => console.log("Conectado ao mongoDB TEST ENVIRONMENT"),
            err => console.log('Erro ao conectar com mongoDB')
        )
    }
}
 
