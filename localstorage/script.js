
var nome = document.querySelector('input[name=nome]')
var tipo = document.querySelector('input[name=tipo]')
var form  = document.querySelector('form')
var tbody = document.querySelector('tbody')

var lista = JSON.parse(localStorage.getItem('lista')) || []

listar()

// Evento emitido pelo formulário
form.onsubmit = function(event) {
	event.preventDefault()

  cadastrar(nome.value, tipo.value)
}



function cadastrar(nomeValor, tipoValor) {
    var pokemon = {
			nome: nomeValor,
			tipo: tipoValor
    }

		lista.push(pokemon)
		
		localStorage.setItem('lista', JSON.stringify(lista))
		tbody.innerHTML = criarLinhas(lista)
}

function listar() {
	tbody.innerHTML = criarLinhas(lista)
}

function criarLinhas(minhaLista) {
	var linhas = []
	
	for(item of minhaLista) {
		var tr = document.createElement('tr')
		var td = ''
		
		for(propriedade in item) {
			td += `<td>${item[propriedade]}</td>`
		}

		tr.innerHTML = td
		linhas.push(tr.outerHTML)
	}

	return linhas.join('')
}



