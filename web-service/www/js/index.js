
var form = document.querySelector('form')
var cep = document.querySelector('input')

var bairro = document.querySelector('.bairro')
var cidade = document.querySelector('.estado')
var estado = document.querySelector('.cidade')
var logradouro = document.querySelector('.logradouro')



form.onsubmit = function (event) {
  event.preventDefault()

  var endereco = {
    bairro: 'Vila Mariana',
    cidade: 'São Paulo',
    estado: 'SP',
    logradouro: 'Av. Lins de Vasconceles'
  }

  consultarCep(cep.value)
}

function consultarCep(cep) {
  var api = fetch('https://viacep.com.br/ws/' + cep + '/json/')

  api
    .then(function(resposta) { return resposta.json() })
    .then(function(resultado) {
      bairro.innerText = 'Rua: ' + resultado.bairro
      cidade.innerText = 'Cidade: ' + resultado.localidade
      estado.innerText = 'Estado: ' + resultado.uf
      logradouro.innerText = 'Logradouro: ' + resultado.logradouro
    })

}
