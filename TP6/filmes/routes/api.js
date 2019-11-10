const express = require('express');
const router = express.Router();

var Filmes = require('../controllers/filmes')

// GET: lista de filmes
router.get('/filmes', function(req, res){

    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

})

// GET: recupera a informação de um filme
router.get('/filmes/:idFilme', function(req, res){

    Filmes.consultar(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

})

// POST: inserir um filme
router.post('/filmes', function(req, res){

    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

})

// DELETE: remover um filme
router.delete('/filmes/:idFilme', function(req, res){

    Filmes.remover(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

})

module.exports = router