let painel2 = document.getElementById("computador")
let painel3 = document.getElementById("resultado")
let msg = document.getElementById("mensagem")
let btnjogo = document.getElementById("btnjogar")

painel2.style.visibility = "hidden"
painel3.style.visibility = "hidden"

let j1 = document.getElementById("j1")
let j2 = document.getElementById("j2")

function muda() {
    if (btnjogo.style.visibility == "hidden") {
        alert("Você só pode mudar a mão no início do jogo!")
    } else {
        if (j1.alt == "pedra") {
            j1.src = "imagens/papel.png"
            j1.alt = "papel"
        } else if (j1.alt == "papel") {
            j1.src = "imagens/tesoura.png"
            j1.alt = "tesoura"
        } else if (j1.alt == "tesoura") {
            j1.src = "imagens/pedra.png"
            j1.alt = "pedra"
        }
    }
    
}

function jogar() {
    btnjogo.style.visibility = "hidden"
    
    // Sorteando a jogada do PC
    let num = Math.floor(Math.random() * 3 + 1)
    if (num == 1) {
        j2.src = "imagens/pedra.png"
        j2.alt = "pedra"
    } else if (num == 2) {
        j2.src = "imagens/papel.png"
        j2.alt = "papel"
    } else if (num == 3) {
        j2.src = "imagens/tesoura.png"
        j2.alt = "tesoura"
    }

    painel2.style.visibility = "visible"
    painel3.style.visibility = "visible"

    // Mostrando o resultado final
    if (j1.alt == j2.alt) {
        msg.innerHTML = "Jogo Empatado!"
    } else if (j1.alt == "pedra") {
        if (j2.alt == "papel") {
            msg.innerHTML = "Você PERDEU! Sua pedra será envolvida pelo papel!"
        } else if (j2.alt == "tesoura") {
            msg.innerHTML = "Você GANHOU! Sua pedra quebra a tesoura!"
        }
    } else if (j1.alt == "papel") {
        if (j2.alt == "pedra") {
            msg.innerHTML = "Você GANHOU! Seu papel envolve a pedra!"
        } else if (j2.alt == "tesoura") {
            msg.innerHTML = "Você PERDEU! Seu papel será cortado pela tesoura!"
        }
    } else if (j1.alt == "tesoura") {
        if (j2.alt == "pedra") {
            msg.innerHTML = "Você PERDEU! Sua tesoura será quebrada pela pedra!"
        } else if (j2.alt == "papel") {
            msg.innerHTML = "Você GANHOU! Sua tesoura corta o papel!"
        }
    }

}

function restart() {
    painel2.style.visibility = "hidden"
    painel3.style.visibility = "hidden"
    btnjogo.style.visibility = "visible"
}