var bcrypt = require('bcryptjs');
//var salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync('senha123', salt);
var loginsModel = require('../models/loginModel');

module.exports = function(app) {

    app.post('/login', function (req, res) {
        loginsModel.findOne({ user: req.body.user }, function(err, response) {
            if (err) {
                console.log(err);
            } else {
                if (req.body.password && response) {
                    var result = bcrypt.compareSync(req.body.password , response.password)
                    if (result) {
                        res.status(200).json({ "response" : true });
                    } else {
                        res.status(200).json({ "response" : false, "msg" : "Senha inválida "});
                    }
                } else {
                    res.status(200).json({ "response" : false, "msg" : "Usuário não cadastrado"});
                }
            }
        })
        
    })
}