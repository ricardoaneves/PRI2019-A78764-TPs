var express = require('express')
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myDB = "/home/ricardo/Universidade/PLC/PRI/Aula6/TP5/alunos/public/data/alunos.json"

router.get('/alunos', function(req, res){

  jsonfile.readFile(myDB, (erro, dados) => {

    if(!erro)
      res.render('index', {lista: dados})               
    else
        res.render('error', {error: erro})  

  }) 
})

router.get('/alunos/:numero/notas', function(req, res){

  var numero = req.params.numero

  jsonfile.readFile(myDB, (erro, dados) => {

    if(!erro){

      var element = dados.find(a => a.numero == numero)

      if(element)
        res.render('notas', {aluno: element})
      else
        res.render('index', {lista: dados})
      
    }
    else
      res.render('error', {error: erro})
    
  })
})

router.post('/alunos', function(req, res){

  var aluno = req.body
  aluno = {...aluno, notas:[]}

  jsonfile.readFile(myDB, (erro, dados) => {

    if(!erro){

      dados.push(aluno)
      jsonfile.writeFile(myDB, dados, erro => {

        if(erro)
          console.log(erro)
        else
          console.log('ALUNO REGISTADO')

      })
    }

    res.render('index', {lista: dados})

  })
})

router.post('/alunos/:numero/notas', function(req, res){

  var numero = req.params.numero
  var nota = req.body

  jsonfile.readFile(myDB, (erro, dados) => {

    if(!erro){

      var aluno = dados.find(a => a.numero = numero)
      console.log('Aluno = ' + aluno)
      aluno['notas'].push(nota)

      jsonfile.writeFile(myDB, dados, erro => {

        if(erro)
          console.log(erro)
        else
          console.log('NOTA REGISTADA')

      })
    }

    res.render('notas', {aluno: aluno})

  })
})

router.delete('/alunos/:numero', function(req, res){

  var numero = req.params.numero

  jsonfile.readFile(myDB, (erro, dados) => {

      if(!erro){

        var index = dados.findIndex(a => a.numero == numero)
        console.log('Index = ' + index)

        if(index > -1){

          dados.splice(index, 1)
          
          jsonfile.writeFile(myDB, dados, erro => {

            if(erro)
              console.log(erro)
            else
              console.log('ALUNO REMOVIDO')

          })
        }
      }

      res.render('index', {lista: dados})

  })
})

router.delete('/alunos/:numero/notas/:identificador', function(req, res){

  var numero = req.params.numero
  var identificador = req.params.identificador

  jsonfile.readFile(myDB, (erro, dados) => {

    if(!erro){

      var aluno = dados.find(a => a.numero ==  numero)
      console.log('aluno = ' + aluno)
      var index = aluno['notas'].findIndex(n => n.identificador == identificador)
      console.log('Index = ' + index)

      if(aluno && (index > -1)){

        aluno['notas'].splice(index, 1)
        
        jsonfile.writeFile(myDB, dados, erro => {

          if(erro)
            console.log(erro)
          else
            console.log("NOTA REMOVIDA")

        })
      }
    }

    res.render('notas', {aluno:aluno})

  })

})

module.exports = router;