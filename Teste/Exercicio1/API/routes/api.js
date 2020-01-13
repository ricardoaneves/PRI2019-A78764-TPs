var express = require('express');
var router = express.Router();

var Publications = require('../controllers/publications');

router.get('/pubs', function(req, res) {

    if(req.query.type && req.query.year){

        var type = req.query.type;
        var year = req.query.year;
        Publications.findByTypeAndYear(type, year)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));

    }
    else if(req.query.type){

        var type = req.query.type;
        Publications.findByType(type)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));

    }
    else if(req.query.autor){

        var autor = req.query.autor;
        Publications.findByAuthor(autor)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));

    }
    else{

        Publications.find()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));

    }

});

router.get('/types', function(req, res) {

    Publications.findTypes()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));

});

router.get('/pubs/:id', function(req, res) {

    var id = req.params.id;
    Publications.findByID(id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));

});

router.get('/autores', function(req, res) {

    Publications.findAuthors()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));

});

module.exports = router;
