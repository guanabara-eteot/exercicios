let saida = document.getElementById("saida")
let tit = document.getElementById("titulo")
let msg = document.getElementById("mensagem")

saida.style.visibility = "hidden"

function horario() {
    let turno = document.getElementById("turno").value

    /* 
    A estrutura condicional switch permite testar valores isolados em variáveis.
    Não é possível fazer testes lógicos para verificar intervalos (entre 2 e 10, por exemplo), apenas valores fixos.

    A cláusula default será executada caso nenhum valor seja atendido.

    Jamais esqueça o uso do comando break para cada case, ou isso vai causar um grande problema.
    */
    switch (turno) {
        case "m":
            tit.innerHTML = `Horário para turno matutino`
            msg.innerHTML = `Das 7h até 12:30h da manhã`
            break
        case "t":
            tit.innerHTML = `Horário para turno vespertino`
            msg.innerHTML = `Das 13:30h até 17:20h da tarde`
            break
        case "n":
            tit.innerHTML = `Horário para turno noturno`
            msg.innerHTML = `Das 6:20h até 22h da noite`
            break
        default:
            tit.innerHTML = `Turno inválido`
            msg.innerHTML = `Por favor, escolha um turno correto e tente novamente.`
            break
    }

    saida.style.visibility = "visible"
    return false
}