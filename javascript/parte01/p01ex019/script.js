let f1 = document.getElementById("f1")
let f2 = document.getElementById("f2")
let f3 = document.getElementById("f3")
let f4 = document.getElementById("f4")

let calend = new Date()

function calcpreco() {
    let he = Number(document.getElementById("hora").value)
    let me = Number(document.getElementById("min").value)
    let fracao = Number(document.getElementById("fracao").value)
    let hs = calend.getHours()
    let ms = calend.getMinutes()
    f1.innerHTML = `Horário de Entrada: ${he}:${me}`
    f2.innerHTML = `Horário de Saída: ${hs}:${ms}`

    let tempo = (hs - he) * 60 + Math.abs(ms - me)
    // Math.abs() retorna o valor absoluto, sem sinal + ou -
    f3.innerHTML = `Tempo de Permanência: ${tempo} min`

    // Considerando que cada 30 min custa o valor da fração
    let preco = Math.round(tempo / 30) * fracao
    f4.innerHTML = `Valor a pagar: <strong>R$${preco.toFixed(2)}</strong>`
    return false
}