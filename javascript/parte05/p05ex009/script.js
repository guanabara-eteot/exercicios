let saida = document.getElementById("saida")
let msg = document.getElementById("mensagem")

saida.style.visibility = "hidden"

function somar() {
    let i = Number(document.getElementById("ini").value)
    let f = Number(document.getElementById("fim").value)
    saida.style.visibility = "hidden"

    if (i > f) {
        alert("O primeiro valor deve ser menor que o segundo.")
    } else {
        msg.innerHTML = `TOTAL = `
        let c = i
        let s = 0
        while (c <= f) {
            msg.innerHTML += `${c} `
            if (c != f) {
                msg.innerHTML += `+ `
            }
            s += c // O mesmo que s = s + c
            c++
        }
        msg.innerHTML += ` = <strong>${s}</strong>`
        saida.style.visibility = "visible"
    }

    return false
}