//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
}

//Some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
resultado = 0
for(let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}
console.log(resultado);

//Calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
resultado = 0
for(let index = 0; index < numbers.length; index += 1) {
    resultado += (numbers[index])/numbers.length;
}
console.log(resultado);

// Com base no código que acabou de gerar, faça com que,
// caso o valor final seja maior que 20, imprima a mensagem:
// “valor maior que 20”. Caso não seja,
// imprima a mensagem: “valor menor ou igual a 20”;

//Calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    resultado = 0
    media = 0
    for(let index = 0; index < numbers.length; index += 1) {
        resultado += (numbers[index]);
    }
    media = resultado / numbers.length
    console.log("Média é igual a: " + media);
    console.log("Soma é igual a: " + resultado);

    if (media > 20) {
        console.log("Valor maior que 20");
    }   else {
        console.log("Valor menor ou igual a 20");
    }

    
