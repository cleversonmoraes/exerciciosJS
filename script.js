// EX01
let idadeInput = document.getElementById('idade')
function calcIdade() {
    let idade = Number(idadeInput.value)

    if (idade >= 18) {
       console.log("é maior de idade")
    } else {
        console.log("Não é maior de idade")
    }
}


// EX02
let parImparInput = document.getElementById('parImpar')
function parImpar() {
    let num = Number(parImparInput.value)

    if (num % 2 == 0) {
        console.log("O número é PAR")
    } else {
        console.log("O número é IMPAR")
    }
}

// EX03
let inputNumero3 = document.getElementById('numero3')
function exercicio3() {
    let num3 = inputNumero3.value

    if (num3 == 0) {
        console.log("Número é igual a 0")
    } else if (num3 > 0) {
        console.log("Número é POSITIVO")
    } else {
        console.log("Número é NEGATIVO")
    }
}

// EX04
let inputTabuada = document.getElementById('tabuada')
function tabuada() {

    let tab = Number(inputTabuada.value)
    for (let i = 1; i < 11; i++) {
        console.log(`${tab} x ${i} = ${tab * i}`)
    }
    
}