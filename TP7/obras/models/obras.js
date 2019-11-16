const mongoose = require('mongoose')

var obrasSchema = new mongoose.Schema({

    _id: String,
    nome: String,
    desc: String,
    anoCriacao: String,
    periodo: String,
    compositor: String,
    duracao: String


})

module.exports = mongoose.model('obras', obrasSchema);