/*
  Bora praticar e rever tudo o que foi ensinado na aula? 💜
  Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

  - [ ]  A soma dos dois números;
  - [ ]  A subtração dos dois números;
  - [ ]  A multiplicação dos dois números;
  - [ ]  A divisão dos dois números;
  - [ ]  O resto da divisão dos dois números;

  Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

  - [ ]  Verifique se a soma dos dois números é par (ou ímpar);
  - [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).

  Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

let nome = prompt("Olá visitante, Qual o seu nome?")
alert(`Prazer em conhece-lo ${nome}, bora fazer seu cálculo`)

let numberOne = Number(prompt(`${nome}, Digite o primeiro número`))
let numberTwo = Number(prompt(`${nome}, Digite o segundo número`))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

const equalDifferent  = numberOne != numberTwo

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + multi)
alert("A divisão dos dois números é: " + div.toFixed(2))
alert("O resto da divisão dos dois números é: " + restDiv)

if (restDiv == 0) {
  alert("A soma dos dois números é: Par")
} else {
  alert("A soma dos dois números é: Impar")
}

if (equalDifferent == false) {
  alert("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes")
}