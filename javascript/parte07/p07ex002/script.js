let seq = document.getElementById("seq")

function pa() {
    let a1 = Number(document.getElementById("a1").value)
    let q = Number(document.getElementById("q").value)
    let r = Number(document.getElementById("r").value)

    seq.innerHTML = `Mostrando uma P.A com ${q} elementos, começando com ${a1} e com razão ${r}: <hr>`
    let elemento = a1
    for(let cont = 1; cont <= q; cont++) {
        seq.innerHTML += `Elemento n<sup>o</sup>${cont} &#x2192; <strong>${elemento}</strong><br>`
        elemento += r
    }
    seq.innerHTML += `<hr>Fim da P.A.`
}