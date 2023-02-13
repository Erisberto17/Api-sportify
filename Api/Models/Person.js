const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    nome:String,
    email:String,
    senha:String,
    confirmSenha:String
});

module.exports = Person;