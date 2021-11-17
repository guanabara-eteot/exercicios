let res = document.getElementById("frase")

function cadastrar() {
    let nome, idade, idadenum
    let jovem, velho, nomejovem, nomevelho
    let quant = 0, continua = true
    do {
        // Lendo nome
        while (true) {
            nome = prompt(`Nome da ${quant+1}a. pessoa`).trim()
            if (nome == "") {
                alert("Não deixe a caixa vazia")
            } else if (!isNaN(nome)) {
                alert("Digite um nome, não um número")
            } else {
                break
            }
        }
        
        // Lendo idade
        while (true) {
            idade = prompt(`Idade da ${quant+1}a. pessoa`).trim()
            idadenum = Number(idade)
            if (idade == "") {
                alert("Não deixe a caixa vazia")
            } else if (isNaN(idade)) {
                alert("Informe uma idade válida, não um texto")
            } else if (idadenum < 1 || idade > 150) {
                alert("Digite uma idade entre 1 e 150")
            } else {
                break
            }
        }
        quant ++ // Acabei de cadastrar mais uma pessoa

        // Identificando jovens e velhos
        if (quant == 1) {
            jovem = idadenum
            nomejovem = nome
            velho = idadenum
            nomevelho = nome
        } else {
            if (idadenum < jovem) {
                jovem = idadenum
                nomejovem = nome
            }
            if (idadenum > velho) {
                velho = idadenum
                nomevelho = nome
            }
        }

        continua = confirm("Cadastrar mais uma pessoa?")
    } while (continua == true)

    // Resultado final
    res.innerHTML = `<li>Ao todo, tivemos ${quant} pessoas cadastradas.</li>`
    res.innerHTML += `<li>A pessoa mais jovem é ${nomejovem}, com ${jovem} anos.</li>`
    res.innerHTML += `<li>A pessoa mais velha é ${nomevelho}, com ${velho} anos.</li>`
}