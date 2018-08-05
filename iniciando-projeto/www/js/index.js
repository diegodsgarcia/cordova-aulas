
var form = document.querySelector('form')
var cep = document.querySelector('input')

var bairro = document.querySelector('.bairro')
var cidade = document.querySelector('.estado')
var estado = document.querySelector('.cidade')
var logradouro = document.querySelector('.logradouro')


form.onsubmit = function(event) {
    event.preventDefault()

    var endereco = {
        bairro: 'Vila Mariana',
        cidade: 'São Paulo',
        estado: 'SP',
        logradouro: 'Av. Lins de Vasconceles'
    }

    bairro.innerText = 'Rua: ' + endereco.bairro
    cidade.innerText = 'Cidade: ' + endereco.cidade
    estado.innerText = 'Estado: ' + endereco.estado
    logradouro.innerText = 'Logradouro: ' + endereco.logradouro
}
