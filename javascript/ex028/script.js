let msg = document.getElementById("msg")
let frase = document.getElementById("frase")

let calend = new Date()
let hora = calend.getHours()

// Remova o comentário da linha abaixo para testar outros valores
// hora = 14

frase.innerHTML = `Agora são ${hora} horas`

let corfundo = ""
let corletra = ""
if (hora >= 5 && hora < 12) {
    msg.innerHTML = "Bom Dia &#x1F305;"
    corfundo = "blue"
    corletra = "yellow"
} else if (hora >= 12 && hora < 19) {
    msg.innerHTML = "Boa Tarde &#x1F307;"
    corfundo = "orangered"
    corletra = "yellow"
} else if ((hora >= 19 && hora < 24) || (hora >= 0 && hora < 5)) {
    msg.innerHTML = "Boa Noite &#x1F311;"
    corfundo = "black"
    corletra = "white"
}

document.body.style.backgroundColor = corfundo
msg.style.color = corletra
frase.style.color = corletra