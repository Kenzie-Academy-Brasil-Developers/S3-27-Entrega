console.log("Exercicio 1")

let number1 = 15
let number2 = 16

if(number1>number2){
    let diferenca = number1-number2
    alert(`O maior numero é ${number1} e a diferença é ${diferenca}`)
}else if(number2>number1){
    let diferenca = number2-number1
    alert(`O maior numero é ${number2} e a diferença é ${diferenca}`)
}else{
    alert("Não existe diferença nos números")
}





console.log("Exercicio 2")

let numero1 = 10.1
let numero2 = 10

if(numero1 > numero2){
    alert(`O numero ${numero1} é maior que número ${numero2}`)
}else if(numero2>numero1){
    alert(`O numero ${numero2} é maior que número ${numero1}`)
}else{
    alert("Números iguais")
}





console.log("Exercicio 3")

let salarioTrabalhador = 1000
let valorPrestacao = 350

let calculoEmprestimo = (valorPrestacao/salarioTrabalhador)*100

if(calculoEmprestimo<30){
    alert(`Empréstimo concedido`)
}else{
    alert(`Empréstimo não concedido`)
}





console.log("Exercicio 4")

let valorAnalisado = 15

if(valorAnalisado % 3 === 0 & valorAnalisado % 5 === 0){
    alert(`Valor invalido`)
}else if(valorAnalisado % 5 === 0){
    alert(`Valor divisivel por 5`)
}else if(valorAnalisado % 3 === 0){
    alert(`Valor divisível por 3`)
}






console.log("Exercicio 5")

let diaDigitado = parseInt(prompt("Digite um número de 1 a 7"))

if(diaDigitado === 1){
    alert("Domingo")
}else if(diaDigitado === 2){
    alert("Segunda-Feira")
}else if(diaDigitado === 3){
    alert("Terça-Feira")
}else if(diaDigitado === 4){
    alert("Quarta-Feira")
}else if(diaDigitado === 5){
    alert("Quinta-Feira")
}else if(diaDigitado === 6){
    alert("Sexta-Feira")
}else if(diaDigitado === 7){
    alert("Sábado")
}else{
    alert("Erro, dia da semana inválido")
}







console.log("Exercicio 6")

let salarioFuncionario = 1156.90
let percentualAjuste = 4.5
let valorReajuste = (percentualAjuste*salarioFuncionario)/100

if(percentualAjuste<5.1){
    let novoValor = salarioFuncionario+valorReajuste
    alert(`O salário do funcionario corrigido é de ${novoValor.toFixed(2)}`)
}else{
    alert(`Reajuste acima do permitido, o reajuste é de até 5%`)
}







console.log("Exercicio 7")

let valorDolar = 200.00
let cotacao = 5.40
let valorReal = valorDolar*cotacao

alert(`$${valorDolar.toFixed(2)} é equivalente a R$${valorReal.toFixed(2)}, tendo ${cotacao.toFixed(2)} como cotação`)






console.log("Exercicio 8")

// Tipo 1 – ervas daninhas R$ 50,00 por acre;
// Tipo 2 – gafanhotos R$ 100,00 por acre;
// Tipo 3 – broca R$ 150,00 por acre;
// Tipo 4 – todos acima R$ 250,00 por acre.

let tipoVaporizacao = 4
let areaAcre = 1001

if(tipoVaporizacao === 1){

    let valorPago = areaAcre*50.00

    if(areaAcre>1000){
        let desconto = valorPago-((5*valorPago)/100)
        alert(`O valor a ser pago é de: R$${desconto}`)
    }else if(valorPago>750){
        let descontoValor = valorPago-(((valorPago-750)*10)/100)
        alert(`O valor a ser pago é de: R$${descontoValor.toFixed(2)}`)
        
    }else{
        alert(`O valor a ser pago é de: R$${valorPago.toFixed(2)}`)
    }
}else if(tipoVaporizacao === 2){
    let valorPago = areaAcre*100.00

    if(areaAcre>1000){
        let desconto = valorPago-((5*valorPago)/100)
        alert(`O valor a ser pago é de: R$${desconto}`)
    }else if(valorPago>750){
        let descontoValor = valorPago-(((valorPago-750)*10)/100)
        alert(`O valor a ser pago é de: R$${descontoValor.toFixed(2)}`)
        
    }else{
        alert(`O valor a ser pago é de: R$${valorPago.toFixed(2)}`)
    }
}else if(tipoVaporizacao === 3){
    let valorPago = areaAcre*150.00

    if(areaAcre>1000){
        let desconto = valorPago-((5*valorPago)/100)
        alert(`O valor a ser pago é de: R$${desconto.toFixed(2)}`)
    }else if(valorPago>750){
        let descontoValor = valorPago-(((valorPago-750)*10)/100)
        alert(`O valor a ser pago é de: R$${descontoValor.toFixed(2)}`)
        
    }else{
        alert(`O valor a ser pago é de: R$${valorPago.toFixed(2)}`)
    }
}else if(tipoVaporizacao === 4){
    let valorPago = areaAcre*250.00

    if(areaAcre>1000){
        let desconto = valorPago-((5*valorPago)/100)
        alert(`O valor a ser pago é de: R$${desconto.toFixed(2)}`)
    }else if(valorPago>750){
        let descontoValor = valorPago-(((valorPago-750)*10)/100)
        alert(`O valor a ser pago é de: R$${descontoValor.toFixed(2)}`)
        
    }else{
        alert(`O valor a ser pago é de: R$${valorPago.toFixed(2)}`)
    }
}









console.log("Exercicio 9")

let tempo = 5
let velocidade = 80
let distancia = tempo*velocidade
let litrosUsados = distancia/12

alert(`Seu veículo percorreu ${distancia} km a ${velocidade} km/h em ${tempo}h de viagem e consumiu ${litrosUsados.toFixed(2)}l de gasolina`)









console.log("Exercicio 10")

let valor = 220
let taxa = 3
let tempoAtraso = 0.5
let prestacao = valor+(valor*(taxa/100)*tempoAtraso)

if(Number.isInteger(tempoAtraso)===true && tempoAtraso>0){

    alert(`R$${prestacao}`)
}else{
    alert(`Valor inválido o tempo de atraso deve ser em dias.
    `)
}