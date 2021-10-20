let res = document.getElementById("resultado")
let frase = document.getElementById("frase")

function fechar() {
    res.style.visibility = "hidden"
}

function alunos() {
    let nome = document.getElementById("nome").value
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let med = (n1+n2)/2
    frase.innerHTML = `O aluno ${nome} vai ter <strong>média ${med.toFixed(1)}</strong>`
    res.style.visibility = "visible"
    return false
}