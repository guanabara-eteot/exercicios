let resp = document.getElementById("resposta")

function primos() {
    let num = 2 // Os números 0 e 1 não são primos por definição
    let primo = true
    let cont = 0
    while (num <= 1000) {
        primo = true
        cont = 2
        while (cont < num) {
            if (num % cont == 0) {
                primo = false
                break
            }
            cont ++
        }
        if (primo) {
            resp.innerHTML += `${num} &#x2192; `
        }
        num ++
    }
    resp.innerHTML += `&#x1F3C1;`
}