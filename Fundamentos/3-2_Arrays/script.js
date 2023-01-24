let tasksList = ["Tomar café", "Reunião", "Brincar com o cachorro"];

tasksList.push("Fazer exercícios da Trybe"); //adiciona ao final
tasksList.unshift("Acordar"); //adiciona ao inicio
tasksList.pop(); //remove a ultima tarefa
tasksList.shift(); //remove a primeira tarefa
let indexOfTasks = tasksList.indexOf("Reunião"); //
console.log(tasksList.length); // mostrar tamanho do array, qtd total de elementos
console.log(indexOfTasks);
console.log(tasksList);

// exercicios - "fixando o aprendizado"
for(let index = 0; index <= 20; index+=1 ){
    console.log(index);
  }
  
  