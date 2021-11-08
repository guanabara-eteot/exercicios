
let btn = document.getElementById("botao")
let opc = document.getElementsByName("opc")
let res = document.getElementById("resultado")
let f1 = document.getElementById("frase1")
let f2 = document.getElementById("frase2")

res.style.visibility = "hidden"

function jogar() {
    // Capturando jogada do usuário
    let p1opc = ""
    let p2opc = ""
    let p1num = Number(document.getElementById("num").value)
    if (opc[0].checked) {
        p1opc = "par"
        p2opc = "ímpar"
    } else if (opc[1].checked) {
        p1opc = "ímpar"
        p2opc = "par"
    }

    // Sorteando a jogada do computador
    let p2num = Math.floor(Math.random() * 5 + 0)
    f1.innerHTML = `Você mostrou <strong>${p1num} dedos</strong> e ficou com opção <strong>${p1opc}</strong>`
    f1.innerHTML += `<br>O computador mostrou <strong>${p2num} dedos</strong> e ficou com opção <strong>${p2opc}</strong>`

    // Resultado final
    let total = p1num + p2num
    let final = ""
    f2.innerHTML = `Tivemos um total de <strong>${total} dedos</strong> `
    if (total % 2 == 0) {
        final = "par"
    } else {
        final = "ímpar"
    }

    if (final == p1opc) {
        f2.innerHTML += `<br>PARABÉNS! Você venceu!`
    } else {
        f2.innerHTML += `<br>O COMPUTADOR venceu!`
    }

    res.style.visibility = "visible"
    return false
}

function reset() {
    res.style.visibility = "hidden"
}
