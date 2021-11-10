let msg = document.getElementById("mensagem")
let area = document.getElementById("area")

function calc_area() {
    let l = Number(document.getElementById("larg").value)
    let c = Number(document.getElementById("comp").value)
    let a = l * c
    area.value = a.toFixed(2)
}

function analisar() {
    let a = Number(area.value)
    msg.innerHTML = `Uma área total de <strong>${a.toFixed(2)}m<sup>2</sup></strong> é classificada como `
    if (a < 100) {
        msg.innerHTML += `<span class='destaque'>TERRENO POPULAR</span>.`
    } else if (a >= 100 && a < 500) {
        msg.innerHTML += `<span class='destaque'>TERRENO MASTER</span>.`
    } else if (a >= 500 && a < 1000) {
        msg.innerHTML += `<span class='destaque'>TERRENO VIP</span>.`
    } else {
        msg.innerHTML += `<span class='destaque'>TERRENO INDUSTRIAL</span>.`
    }
    return false
}