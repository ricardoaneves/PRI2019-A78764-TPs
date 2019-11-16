var express = require('express')
var router = express.Router()

var Obras = require('../controllers/obras')

router.get('/obras', function(req, res){


    if(req.query.anoCriacao){

        Obras.filtrarAnoCriacao(req.query.anoCriacao)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))

    }
    else if(req.query.periodo){

        Obras.filtrarPeriodo(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))

    }
    else if(req.query.compositor){

        Obras.filtrarCompositor(req.query.compositor)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))

    }
    else{

        Obras.listarObras()
            .then(dados => res.json(dados))
            .catch(erro => status(500).jsonp(erro))

    }
})

router.get('/compositores', function(req, res){

    Obras.listarCompositores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

})

router.get('/compositores/:compositor', function(req, res){

    Obras.filtrarCompositor(req.params.compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

})

module.exports = router;