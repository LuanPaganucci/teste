// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//   console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });

// const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

// pessoasAprovadas.forEach((nome, index) => {
//     pessoasAprovadas[index] = pessoasAprovadas[index].toLocaleUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
// });

// console.log(pessoasAprovadas);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((element) => {
//   console.log(element * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
//   //numbers.forEach((element) => console.log(element * 2)); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]  
// });

// // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const multiply = (element) => {
// //   console.log(element * 2);
// // }

// // numbers.forEach(multiply);

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui

  const enviarEmail = (email => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
  })

  emailListInData.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`Sua posição é a de: ${posicao}`);
    console.log(`Sua posição é a de: ${array}`);
  });