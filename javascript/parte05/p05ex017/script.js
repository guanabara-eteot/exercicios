let resp = document.getElementById("resposta")

function mudanum() {
    let btn = document.getElementById("btnfat")
    let num = Number(document.getElementById("num").value)
    btn.value = `Calcular ${num}!`
}

function fatorial() {
    let num = Number(document.getElementById("num").value)
    if (num == 0 || num == 1) {
        // Por definição Matemática, 0! e 1! valem 1
        resp.innerText = `${num}! = 1`
    } else {
        let cont = num
        let fat = 1 // Se começar com 0, vai dar sempre resultado 0, já que se trata de uma multiplicação.
        resp.innerText = `${num}! = `
        while (cont >= 1) {
            fat *= cont // O mesmo que fat = fat * cont
            resp.innerText += ` ${cont}`
            if (cont == 1) {
                resp.innerText += " = "
            } else {
                resp.innerText += " x "
            }
            cont --
        }
        resp.innerText += ` ${fat}`
    }

    return false
}

