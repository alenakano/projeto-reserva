const horariosModel = require('../models/horariosModel')

module.exports = function(app) {

    app.get('/horarios', function(req, res) {
        horariosModel.find(function (err, horariosresponse) {
            if (err) {
                console.log(err)
            } else {
                res.json(horariosresponse);
            }    
        })
    });

    app.delete('/deletar/:_id', function(req, res) {
        horariosModel.findByIdAndRemove(req.params, function(err, response){
            if (err) {
                res.status(500).json( {"response": "Erro"} );
                console.log(err) 
            } else {
                res.status(200).json({ "response" : true });
            }
        })
    })

    app.put('/editar/:_id', function(req, res) {
        horariosModel.findByIdAndUpdate(req.params, req.body, {new: true}, (err, response) => {
            if (err) {
                res.status(500).json( {"response": "Erro"} );
                console.log(err)
            } else {
                res.status(200).json({ "response" : true });
            }
        })
    })

    app.post('/adicionar', function(req, res) {
        const postHorarios = new horariosModel(req.body);
        postHorarios.save(function(err) {
            if (err) {
                return res.status(500).json({"response": "Erro"});
            } else {
                res.status(200).json({ "response" : true });
            }
        })
    })

}