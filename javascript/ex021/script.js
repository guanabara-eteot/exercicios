res = document.getElementById("saida")
frase = document.getElementById("frase")
foto = document.getElementById("foto")

res.style.visibility = "hidden"

function fechar() {
    res.style.visibility = "hidden"
}

function radar() {
    let vel = Number(document.getElementById("vel").value)

    res.style.visibility = "visible"
    frase.innerHTML = `Velocidade identificada: <strong>${vel} Km/h</strong>`
    if (vel <= 50) {
        frase.innerHTML += `<br>Status: <span class='normal'>DENTRO DOS LIMITES</span> (sem multas)`
        foto.src = "imagens/sem-multa.jpg"
    } else {
        frase.innerHTML += `<br>Status: <span class='multado'>MULTADO POR EXCESSO DE VELOCIDADE</span>`
        foto.src = "imagens/com-multa.jpg"
    }

    return false
}