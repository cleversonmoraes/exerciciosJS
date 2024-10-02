// EX01
let idadeInput = document.getElementById('idade')
let container1 = document.getElementById('container1')
let container2 = document.getElementById('container2')
let container3 = document.getElementById('container3')
let tabuada4 = document.getElementById('tabuada4')


function calcIdade() {
    let idade = Number(idadeInput.value)
    let idadeP = document.createElement('p')

    if (idade >= 18) {
       console.log("é maior de idade")
       idadeP.innerHTML = "É maior"
       container1.appendChild(idadeP)
    } else {
        console.log("Não é maior de idade")
        idadeP.innerHTML = "Não é maior de idade"
        container1.appendChild(idadeP)
    }
}


// EX02
let parImparInput = document.getElementById('parImpar')
function parImpar() {
    let num = Number(parImparInput.value)
    let imparPar = document.createElement('p')

    if (num % 2 == 0) {
        console.log("O número é PAR")
        imparPar.innerHTML = `O número ${num} é PAR`
        container2.appendChild(imparPar)
    } else {
        console.log("O número é IMPAR")
        imparPar.innerHTML = `O número ${num} é IMPAR`
        container2.appendChild(imparPar)
    }
}

// EX03
let inputNumero3 = document.getElementById('numero3')
function exercicio3() {
    let num3 = inputNumero3.value
    let numero3 = document.createElement('p')

    if (num3 == 0) {
        console.log("Número é igual a 0")
        numero3.innerHTML = `O número ${num3} é igual a 0`
        container3.appendChild(numero3)
    } else if (num3 > 0) {
        console.log("Número é POSITIVO")
        numero3.innerHTML = `O número ${num3} é POSITIVO`
        container3.appendChild(numero3)
    } else {
        console.log("Número é NEGATIVO")
        numero3.innerHTML = `O número ${num3}  é NEGATIVO`
        container3.appendChild(numero3)
    }
}

// EX04
let inputTabuada = document.getElementById('tabuada')
function tabuada() {

    let tab = Number(inputTabuada.value)
    let tabuadaParagrafo = document.createElement('p')
    let resultados = ''

    for (let i = 1; i < 11; i++) {
        console.log(`${tab} x ${i} = ${tab * i}`)
        resultados += `${tab} x ${i} = ${tab * i}<br>`
    }

    tabuadaParagrafo.innerHTML = resultados
    tabuada4.appendChild(tabuadaParagrafo)
}