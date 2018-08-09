
var form = document.querySelector('form')
var cep = document.querySelector('input')

var bairro = document.querySelector('.bairro')
var cidade = document.querySelector('.cidade')
var estado = document.querySelector('.estado')
var logradouro = document.querySelector('.logradouro')

// Eventos
form.onsubmit = function (event) {
  event.preventDefault()

  consultarCep(cep.value)
}

// Funções
function consultarCep(cep) {
  var api = fetch('https://viacep.com.br/ws/' + cep + '/json/')

  api
    .then(function(resposta) { return resposta.json() })
    .then(function(resultado) {
      bairro.innerText = 'Bairro: ' + resultado.bairro
      cidade.innerText = 'Cidade: ' + resultado.localidade
      estado.innerText = 'Estado: ' + resultado.uf
      logradouro.innerText = 'Logradouro: ' + resultado.logradouro
    })

}
