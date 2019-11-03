function apagaAluno(numero){

    console.log('apagarAluno(' + numero + ')')
    axios.delete('/alunos/' + numero)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))

}

function apagaNota(args){

    var array = args.split(',')
    var numero = array[0]
    var id = array[1]
    
    console.log('apagarNota(' + id + ')')
    axios.delete('/alunos/' + numero + '/notas/' + id)
        .then(response => window.location.assign('/alunos/' + numero + '/notas'))
        .catch(error => console.log(error))

}