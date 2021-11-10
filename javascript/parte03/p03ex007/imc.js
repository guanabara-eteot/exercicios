let saida = document.getElementById("saida")
let msg = document.getElementById("msg")
let foto = document.getElementById("fotoimc")

saida.style.visibility = "hidden"

function calcimc() {
    let peso = Number(document.getElementById("peso").value)
    let alt = Number(document.getElementById("altura").value)
    let imc = peso / (alt * alt)

    msg.innerHTML = `Uma pessoa com peso de ${peso.toFixed(2)}Kg e ${alt.toFixed(2)}m de altura tem o <strong>IMC de ${imc.toFixed(1)}</strong>, o que caracteriza uma classificação `

    if (imc < 18.5) {
        msg.innerHTML += `<strong>ABAIXO DO PESO</strong>.`
        foto.src = "images/imc-001.png"
    } else if (imc >= 18.5 && imc < 25) {
        msg.innerHTML += `<strong>PESO NORMAL</strong>.`
        foto.src = "images/imc-002.png"
    } else if (imc >= 25 && imc < 30) {
        msg.innerHTML += `<strong>SOBREPESO</strong>.`
        foto.src = "images/imc-003.png"
    } else if (imc >= 30 && imc < 35) {
        msg.innerHTML += `<strong>OBESIDADE LEVE</strong>.`
        foto.src = "images/imc-004.png"
    } else if (imc >= 35 && imc < 40) {
        msg.innerHTML += `<strong>OBESIDADE SEVERA</strong>.`
        foto.src = "images/imc-005.png"
    } else if (imc >= 40) {
        msg.innerHTML += `<strong>OBESIDADE MÓRBIDA</strong>.`
        foto.src = "images/imc-006.png"
    }

    saida.style.visibility = "visible"
    return false
}