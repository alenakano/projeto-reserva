const mongoose = require('mongoose');

let horario = new mongoose.Schema ({
    data: Date,
    hora: Number
});

module.exports = mongoose.model('horario', horario);