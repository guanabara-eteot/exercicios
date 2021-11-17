let res = document.getElementById("frase")

function cadastrar() {
    let sal, salnum, sexo
    let totM = 0, totF = 0, somasalM = 0, somasalF = 0
    let quant = 0
    let continua
    do {
        // Lendo salário
        while (true) {
            sal = prompt(`Salário do ${quant+1}o. funcionário`).trim()
            salnum = Number(sal)
            if (sal == "") {
                alert("Não deixe a caixa vazia")
            } else if (isNaN(sal)) {
                alert("Digite um salário válido, não texto")
            } else if (salnum < 1100) {
                alert("O funcionário deve ganhar pelo menos um salário mínimo")
            } else {
                break
            }
        }
        
        // Lendo sexo
        while (true) {
            sexo = prompt(`Sexo do ${quant+1}o. funcionário`).toUpperCase().trim()
            if (sexo.trim() == "") {
                alert("Não deixe a caixa vazia")
            } else if (!isNaN(sexo)) {
                alert("Não digite números, apenas M ou F")
            } else if (sexo != "M" && sexo != "F") {
                alert("Apenas os valores M e F são válidos")
            } else {
                break
            }
        }
        quant ++
        
        // Totalizando de acordo com o sexo
        if (sexo == "M") {
            totM ++
            somasalM += salnum
        } else if (sexo == "F") {
            totF ++
            somasalF += salnum
        }
        
        continua = confirm("Cadastrar mais um funcionário?")
    } while (continua == true)

    // Resultado final
    let saltotal = somasalM + somasalF
    
    let medM = 0, medF = 0
    if (totM != 0) { // Tentando evitar divisão por zero
        medM = somasalM / totM
    }
    if (totF != 0) {
        medF = somasalF / totF
    }
    
    res.innerHTML = `<li>Ao todo, tivemos ${totM} homens e ${totF} mulheres cadastrados.</li>`
    res.innerHTML += `<li>A empresa paga R$${somasalM.toFixed(2)} para os homens, que têm média salarial de R$${medM.toFixed(2)}</li>`
    res.innerHTML += `<li>A empresa paga R$${somasalF.toFixed(2)} para as mulheres, que têm média salarial de R$${medF.toFixed(2)}</li>`
    res.innerHTML += `<li>No total, a folha de pagamento da empresa soma R$${saltotal.toFixed(2)} em salários.</li>`
}