/* 
  Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação e resto da divisão.
  E para cada operação, mostrar um alerta com o resultado.
*/

let firstNumber = prompt("Digite o primeiro número");
let secondNumber = prompt("Digite o segundo número");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

function parImpar (number) {
    const numero = number;
    if (numero /2) {
        alert("A soma dos dois números é par");
    
    } else {
        alert("A soma dos dois números é ímpar");
    }
}

function numIguais(firstNumber, secondNumber ) {
    
    if (firstNumber == secondNumber){
        alert("Os dois números inseridos são iguais");
    } else {
        alert("Os dois números inseridos são diferentes");
    }
}


alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + multi);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + restDiv);

parImpar(sum);
numIguais(firstNumber, secondNumber);