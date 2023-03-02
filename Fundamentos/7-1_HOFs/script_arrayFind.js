// const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

// idades.find((idade) => idade < 20); // 18
// idades.find((idade) => idade > 50); // 73
// idades.find((idade) => idade ===33); // undefined

// // Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui
const verificarDivisao = numbers.find((divisivel) => divisivel % 3 === 0 && divisivel % 5 === 0);
console.log(verificarDivisao)

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui

const qtdLetras5 = names.find((comprimento5) => comprimento5.length === 5);
console.log(qtdLetras5);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui

const acharPorID = musicas.find((idProcurado) => idProcurado.id === '31031685')
console.log(acharPorID)