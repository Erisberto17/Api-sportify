const mongoose = require('mongoose');

const Catalogo = mongoose.model('Catalogo', {
    nome: String,
    descricao: String,
    img:Array,
    links:Array
});

module.exports = Catalogo;