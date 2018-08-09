
var form = document.querySelector('form')
var cep = document.querySelector('input')

var bairro = document.querySelector('.bairro')
var cidade = document.querySelector('.cidade')
var estado = document.querySelector('.estado')
var logradouro = document.querySelector('.logradouro')

var storage = JSON.parse(localStorage.getItem('endereco'))

pegarEndereco()

// Eventos
form.onsubmit = function (event) {
  event.preventDefault()

  consultarCep(cep.value)
}

// Funções
function consultarCep(cep) {
  var api = fetch('https://viacep.com.br/ws/' + cep + '/json/')

  api
    .then(function (resposta) { return resposta.json() })
    .then(function (resultado) {
      bairro.innerText = 'Bairro: ' + resultado.bairro
      cidade.innerText = 'Cidade: ' + resultado.localidade
      estado.innerText = 'Estado: ' + resultado.uf
      logradouro.innerText = 'Logradouro: ' + resultado.logradouro

      localStorage.setItem('endereco', JSON.stringify(resultado))
    })
}

function pegarEndereco() {
  if (storage) {
    bairro.innerText = 'Rua: ' + storage.bairro
    cidade.innerText = 'Cidade: ' + storage.localidade
    estado.innerText = 'Estado: ' + storage.uf 
    logradouro.innerText = 'Logradoura: ' + storage.logradouro
  }
}
