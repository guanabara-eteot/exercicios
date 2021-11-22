let seq = document.getElementById("seq")

function fibonacci() {
    let quant = Number(document.getElementById("quant").value)
    seq.innerHTML = `Mostrando a sequência com ${quant} números: <hr>`
    
    let t1 = 0
    let t2 = 1
    let aux
    seq.innerHTML += `${t1} &#x2192; ${t2} &#x2192;`
    for (let cont = 3; cont <= quant; cont++) {
        aux = t1 + t2
        seq.innerHTML += ` ${aux} &#x2192; `
        t1 = t2
        t2 = aux
    }
    seq.innerHTML += `FIM`

    return false
}