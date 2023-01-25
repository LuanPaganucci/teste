// exercicio 4

const n = `9` ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);


// 7 de 10

let n1 = 100
let n2 = 1
let sum = 0

while(n2<=n1){
    sum = sum + n2;
    n2 += 1
}
console.log(sum);

//9 de 10

let resultado = 0;
let num1 = 100
let num2 = 5
do {
   num1 -= num2;
   resultado -= num2 - resultado;
} while (resultado < 0);
console.log(resultado);