const mongoose = require('mongoose');

let login = new mongoose.Schema ({
    user: String,
    password: String
});

module.exports = mongoose.model('login', login);