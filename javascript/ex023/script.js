let saida = document.getElementById("saida")
let frase = document.getElementById("frase")

function pbf() {
    let renda = Number(document.getElementById("renda").value)
    let membros = Number(document.getElementById("familia").value)
    
    let percapita = renda / membros

    frase.innerHTML = `Uma família com ${membros} integrantes e que recebe R$${renda.toFixed(2)} por mês, tem <strong>renda per capita de R$${percapita.toFixed(2)}</strong> e por conta disso `

    if (percapita <= 178) {
        frase.innerHTML += `<span class='sim'>tem direito ao Bolsa Família</span>.`
    } else {
        frase.innerHTML += `<span class='nao'>NÃO tem direito ao Bolsa Família</span>.`
    }

    return false
}