let resp = document.getElementById("resposta")

function primos() {
    let num = 2 // Os números 0 e 1 não são primos por definição
    let primo = true
    let cont = 0
    while (num <= 1000) {
        // Esse aqui é um dos métodos mais eficientes para testar se um número é primo. Descartamos os valores 1 e o próprio número e testamos a partir do 2. Ao encontrar o primeiro divisível, o número não é primo e interrompemos a repetição com o comando break para não perder mais tempo descobrindo se existem outros divisores.
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