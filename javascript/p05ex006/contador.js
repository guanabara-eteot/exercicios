let saida = document.getElementById("saida")
let msg = document.getElementById("mensagem")

function contagem() {
    let ini = Number(document.getElementById("ini").value)
    let fim = Number(document.getElementById("fim").value)
    let passo = Number(document.getElementById("passo").value)

    if (passo == 0) { passo = 1 }
    if (passo < 0) { passo *= -1 }

    msg.innerHTML = `Contagem de ${ini} até ${fim} com salto ${passo}:<br><br>`

    if (ini < fim) {
        let cont = ini
        while (cont <= fim) {
            msg.innerHTML += `${cont} &#x1F449; `
            cont ++ 
        }
    } else if (ini > fim) {
        let cont = ini
        while (cont >= fim) {
            msg.innerHTML += `${cont} &#x1F449; `
            cont -- 
        }
    }
    msg.innerHTML += `&#x1F3C1; `


    return false
}