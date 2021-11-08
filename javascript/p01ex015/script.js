let res = document.getElementById("resultado")
let frase = document.getElementById("frase")

function fechar() {
    res.style.visibility = "hidden"
}

function calctinta() {
    let l = Number(document.getElementById("larg").value)
    let a = Number(document.getElementById("alt").value)
    let area = l * a
    frase.innerHTML = `Uma parede com ${l}x${a} metros vai ter uma <strong>área total de ${area}m<sup>2</sup></strong>.`
    let tinta = area / 2
    frase.innerHTML += `<p>Para cobrir essa área, será necessário um total de <strong>${tinta} litros</strong> de tinta.`
    res.style.visibility = "visible"
    return false
}