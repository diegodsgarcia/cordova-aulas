
var form = document.querySelector('form')
var cep = document.querySelector('input')

var bairro = document.querySelector('.bairro')
var cidade = document.querySelector('.cidade')
var estado = document.querySelector('.estado')
var logradouro = document.querySelector('.logradouro')

// Eventos
form.onsubmit = function(event) {
  event.preventDefault()

  var endereco = {
    bairro: 'Aclimação',
    cidade: 'São Paulo',
    estado: 'SP',
    logradouro: 'Av. Lins de Vasconcelos'
  }

  bairro.innerText = 'Bairro: ' + endereco.bairro
  cidade.innerText = 'Cidade: ' + endereco.cidade
  estado.innerText = 'Estado: ' + endereco.estado
  logradouro.innerText = 'Logradouro: ' + endereco.logradouro
  
}
