let saida = document.getElementById("saida")
let msg = document.getElementById("mensagem")
let foto = document.getElementById("foto")

saida.style.visibility = "hidden"

function estacao() {
    let mes = document.getElementById("mes").value

    switch (mes) {
        case "jan":
        case "fev":
        case "mar":
            msg.innerHTML = `Estamos no VERÃO`
            foto.src = "fotos/verao.jpg"
            break
        case "abr":
        case "mai":
        case "jun":
            msg.innerHTML = `Estamos no OUTONO`
            foto.src = "fotos/outono.jpg"
            break
        case "jul":
        case "ago":
        case "set":
            msg.innerHTML = `Estamos no INVERNO`
            foto.src = "fotos/inverno.jpg"
            break
        case "out":
        case "nov":
        case "dez":
            msg.innerHTML = `Estamos no PRIMAVERA`
            foto.src = "fotos/primavera.jpg"
            break
    }

    saida.style.visibility = "visible"
    return false
}