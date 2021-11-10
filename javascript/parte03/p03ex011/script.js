let magico = 0 // Declarado aqui fora para funcionar no programa todo, inclusive dentro de todas as funções
let chances = 10 // Quantas chances o jogador vai ter para tentar acertar
let tentativas = 1

let frase = document.getElementById("frase")
let btnjogar = document.getElementById("btnjogar")
let resp = document.getElementById("resposta")

function sorteianum() {
    // Sorteando o número mágico, entre 1 e 50
    magico = Math.floor(Math.random() * 50 + 1)
    tentativas = 1
    frase.innerHTML = `Tentativa ${tentativas}:`
}

function jogada() {
    let palpite = Number(document.getElementById("palpite").value)
    if (palpite == magico) {
        resp.innerHTML = `&#x2705; PARABÉNS! Você acaba de acertar o número! Eu realmente tinha pensado no valor ${magico}. Você acertou depois de ${tentativas} tentativa(s)! &#x1F44F;`
        btnjogar.style.visibility = "hidden"
    } else {
        if (magico < palpite) {
            resp.innerHTML = `&#x26D4; Você ainda não acertou! Mas o número que eu pensei é MENOR &#x1F53D; que ${palpite}! Você ainda tem ${chances - tentativas} chances!`
        } else if (magico > palpite) {
            resp.innerHTML = `&#x26D4; Não foi dessa vez ainda! Mas o número que eu pensei é MAIOR &#x1F53C; que ${palpite}! Você ainda tem ${chances - tentativas} chances!`
        }
        tentativas ++
        frase.innerHTML = `Tentativa ${tentativas}:`
    }

    if (tentativas >= chances) {
        resp.innerHTML = `FIM DO JOGO! Infelizmente você não conseguiu descobrir o número que eu pensei! Era o valor ${magico}!`
        btnjogar.style.visibility = "hidden"
    }
    return false
}

function restart() {
    resp.innerHTML = `Jogo REINICIADO! Já pensei em outro número mágico!`
    sorteianum() 
    btnjogar.style.visibility = "visible"
    return false
}