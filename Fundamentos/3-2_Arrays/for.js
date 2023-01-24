var numero = 7
console.log(numero *1);
console.log(numero *2);
console.log(numero *3);
console.log(numero *4);
console.log(numero *5);
console.log(numero *6);
console.log(numero *7);
console.log(numero *8);
console.log(numero *9);

// (+=1) = (contador ++) = (contador = contador +1)

var numero = 7
for(var contador = 1; contador <=9; contador ++) {
    console.log(""); //adiciona linhas entre os resultados
    console.log(numero * contador);
}

let listaDeNomes =["Joana", "Maria", "Lucas"];
for(let indice = 0; indice < listaDeNomes.length; indice+=1) {
    let mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
    console.log(mensagem)
}

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (let index = 0; index < groceryList.length; index +=1) {
    let element = groceryList[index];
    console.log(element);
}