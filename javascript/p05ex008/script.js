let t = document.getElementById("titulo")
let m = document.getElementById("mensagem")

function tabuada() {
    let n = Number(document.getElementById("num").value)
    t.innerHTML = `Tabuada do número ${n}`
    m.innerHTML = ``

    let c = 1
    while (c <= 10) {
        m.innerHTML += `${n} x ${c} = <strong>${n * c}</strong> <br>`
        c ++
    }
}