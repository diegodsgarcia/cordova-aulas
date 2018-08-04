

var peso = document.querySelector('input[name=peso]')
var altura = document.querySelector('input[name=altura]')

var formulario = document.querySelector('form')
var p = document.querySelector('.resultado')


formulario.onsubmit = function(event) {
    event.preventDefault()

    var resultado = calcularIMC(peso.value, altura.value)
    
    p.innerText = resultado
}


function calcularIMC(peso, altura) {
    var calculo = peso / (altura * altura)

    if (calculo <= 18.5) {
        return 'Abaixo do peso'
    } else if (calculo <= 25) {
        return 'Peso normal'
    } else if (calculo <= 30) {
        return 'Acima do peso'
    } else {
        return 'Obeso'
    }
}