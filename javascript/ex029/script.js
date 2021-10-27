function mudatemp() {
    let temp = Number(document.getElementById("temp").value)
    let valor = document.getElementById("valor")
    let foto = document.getElementById("emoji")
    valor.innerHTML = `${temp}<sup>o</sup>C`
    if (temp <= 10) {
        foto.src = "imagens/01-ice.png"
    } else if (temp <= 25) {
        foto.src = "imagens/02-cold.png"
    }  else if (temp <= 45) {
        foto.src = "imagens/03-smiling.png"
    }  else if (temp <= 80) {
        foto.src = "imagens/04-hot.png"
    }  else {
        foto.src = "imagens/05-fire.png"
    }
}