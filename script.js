function mostrarAlerta(){
    alert("Bom dia Turma do 2ºAno Extas!")
}

function pedirNome(){
    let nome = prompt("Informe o seu nome: ")
    alert("Bom dia, "+ nome )
}

function somarNumeros(){
    let primeiroValor = Number(prompt("Informe o primeiro numero:"))
    let segundoValor = Number(prompt("Informe o segundo numero"))
    let soma = primeiroValor + segundoValor

    alert("A soma dos números é: " + soma)
}

function mudarformatacao(){
    let resultado = document.getElementById("resultado")
    let nome = prompt("Informe o seu nome:")
    resultado.textContent = "Bom dia"
}