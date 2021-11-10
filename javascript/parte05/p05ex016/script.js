let tit = document.getElementById("titulo")
let frase = document.getElementById("frase")
let saida = document.getElementById("saida")

saida.style.visibility = "hidden"

function primo() {
    let num = Number(document.getElementById("num").value)
    tit.innerHTML = `Analisando o número ${num}`
    frase.innerHTML = `O número ${num} é divisível `
 
    // Este aqui é o jeito mais demorado de descobrir se um número é ou não primo. Na verdade, não precisamos verificar todas as divisões, mas no caso desse exercício, optei por fazer todas as comparações para ter um efeito visual de mostrar todos os divisores na tela.
    
    let cont = 1
    let div = 0
    while (cont <= num) {
        if (num % cont == 0) {
            frase.innerHTML += `por <mark>&nbsp;${cont}&nbsp;</mark> `
            div ++
        }
        cont ++
    }
    
    frase.innerHTML += `. E já que ele tem ${div} divisores, `
    if (div == 2) {
        frase.innerHTML += `<strong>é um número primo.</strong>`
    } else {
        frase.innerHTML += `<strong>não é um número primo.</strong>`
    }

    saida.style.visibility = "visible"
    return false
}