let saida = document.getElementById("saida")
let msg = document.getElementById("msg")

saida.style.visibility = "hidden"

function fechar() {
    saida.style.visibility = "hidden"
}

function reajustar() {
    let nome = document.getElementById("nome").value
    let ano = Number(document.getElementById("ano").value)
    let sal = Number(document.getElementById("sal").value)
    let sexo = document.getElementsByName("sexo")

    let calend = new Date()
    let tempo = calend.getFullYear() - ano

    let porc = 0 
    if (sexo[0].checked) { // Sexo Masculino selecionado
        msg.innerHTML = `O funcionário <strong>${nome}</strong> `
        if (tempo < 20) {
            porc = 5
        } else if (tempo >= 20 && tempo <= 30) {
            porc = 13
        } else if (tempo > 30) {
            porc = 25
        }
    } else if (sexo[1].checked) { // Sexo Feminino selecionado
        msg.innerHTML = `A funcionária <strong>${nome}</strong> `
        if (tempo < 15) {
            porc = 7
        } else if (tempo >= 15 && tempo <= 20) {
            porc = 15
        } else if (tempo > 20) {
            porc = 26      
        }
    }

    let aum = sal * porc / 100
    let nsal = sal + aum

    msg.innerHTML += ` recebe atualmente um salário de R$${sal.toFixed(2)}. Pelas novas regras e por ter <strong>${tempo} anos</strong> de empresa, vai receber um <strong>aumento de ${porc}%</strong> e vai passar a ganhar mais R$${aum.toFixed(2)} por mês, um <strong>novo salário de R$${nsal.toFixed(2)}</strong>.`

    saida.style.visibility = "visible"
    return false
}