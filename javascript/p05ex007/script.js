let tit = document.getElementById("titulo")
let msg = document.getElementById("mensagem")

function contagem() {
    let n = Number(document.getElementById("num").value)

    tit.innerHTML = `Destacando múltiplos de ${n}`
    msg.innerHTML = ""

    let c = 0
    while (c <= 100) {
        if (c % n == 0) {
            msg.innerHTML += `<mark>&nbsp;${c}&nbsp;</mark>&#x2192; `
        } else {
            msg.innerHTML += `&nbsp;${c}&nbsp;&#x2192; `
        }
        c++
    }
    msg.innerHTML += `&#x1F3C1;`

    return false
}