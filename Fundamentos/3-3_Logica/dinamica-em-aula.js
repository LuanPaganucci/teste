// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:
​
// let result = 0;
// for(let index = 1; index <= 50; index += 1){
//     result+=index;
// }
// console.log('A soma total de 1 a 50 é: '+ result);
​
​
//2 -
​
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
​
​
// let divisíveis = [] //criamos um array para armazenar a variável
// for(let index = 2; index <= 150; index += 1){ criamos um loop para adicionar os números no array
//     if(index % 3 === 0){ // criamos em qual condição os números seriam divisiveis por 3
//         divisíveis.push(index); //adicionamos esses números divisivei por 3 no array
//     }
// }
// if(divisíveis.length === 50){ // outra condição agora, aqui verifica se o número de números divisivei por 3 é igual a 50
//     console.log('mensagem secreta'); // caso sim mensagem secreta
//     console.log(divisíveis.length);
// } else {
//     console.log(divisíveis.length);
// }
​
​//3
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

// jogador1 = "pedra";
// jogador2 = "papel";
// if (jogador1 === jogador2) {
//     console.log("A Ties");
// } else if (jogador1 === "pedra" && jogador2 === "tesoura" || jogador1 === "papel" && jogador2 === "pedra" || jogador1 ==="tesoura" && jogador2 === "papel") {
//     console.log("Player 1 won");
// } else {
//     console.log("Player 2 won");
// }
​

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
​
let age = 18;
if(age >= 18){
    console.log('a pessoa é maior de idade');
} else {
    console.log('a pessoa é menor de idade');
}


// 5
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e
//imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let idade2 = 2;
console.log(idade2 >= 18 ? "A pessoa é maior de idade" : "A pessoa é menor de idade");

const idadeCarolzita = 19;
const idadeFlavio = 25;
const idadeNoel = 40;
let maisNova = "";
if (idadeFlavio < idadeCarolzita && idadeFlavio < idadeNoel) {
    maisNova = "Flavio";
} else if (idadeNoel < idadeCarolzita && idadeNoel < idadeFlavio) {
    maisNova = "Noel";
} else {
    maisNova = "Carolzinha"
}
console.log(`${maisNova} é a mais nova.`);

