var express = require('express');
var router = express.Router();
var axios = require('axios');

const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ';

// GET home page
router.get('/', function(req, res) {

    axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey=' + apikey)
        .then(dados => res.render('index', {tipologias: dados.data}))
        .catch(erro => res.render('error', {error: erro}));

});

//GET tipologia by ID
router.get('/:id', function(req, res) {

    var id = req.params.id;
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + id + '?apikey=' + apikey)
        .then(dados => res.render('tipologia', {tipologia: dados.data}))
        .catch(erro => res.render('error', {error: erro}));

});

module.exports = router;
