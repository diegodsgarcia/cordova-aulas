
var form = document.querySelector('form')
var cep = document.querySelector('input')
var geolocalizacaoButton = document.querySelector('.geolocalizacao')

var bairro = document.querySelector('.bairro')
var cidade = document.querySelector('.cidade')
var estado = document.querySelector('.estado')
var logradouro = document.querySelector('.logradouro')
var latitude = document.querySelector('.latitude')
var longitude = document.querySelector('.longitude')

var storage = JSON.parse(localStorage.getItem('endereco'))

pegarEndereco()

// Eventos
form.onsubmit = function (event) {
  event.preventDefault()
  
  consultarCep(cep.value)
}

geolocalizacaoButton.onclick = function() {
  mostrarGeolocalizacao()
}

// Funções
function consultarCep(cep) {
  var api = fetch('https://viacep.com.br/ws/' + cep + '/json/')

  api
    .then(function (resposta) { return resposta.json() })
    .then(function (resultado) {
      bairro.innerText = 'Rua: ' + resultado.bairro
      cidade.innerText = 'Cidade: ' + resultado.localidade
      estado.innerText = 'Estado: ' + resultado.uf
      logradouro.innerText = 'Logradouro: ' + resultado.logradouro

      localStorage.setItem('endereco', JSON.stringify(resultado))
    })
}

function pegarEndereco() {
  if (storage) {
    bairro.innerText = 'Bairro: ' + storage.bairro
    cidade.innerText = 'Cidade: ' + storage.localidade
    estado.innerText = 'Estado: ' + storage.uf 
    logradouro.innerText = 'Logradoura: ' + storage.logradouro
  }
}

function mostrarGeolocalizacao() {
  navigator.geolocation.getCurrentPosition(function(posicao) {
    latitude.innerText = "Latitude: " + posicao.coords.latitude
    longitude.innerHTML = "Longitude: " + posicao.coords.longitude
  })
}
