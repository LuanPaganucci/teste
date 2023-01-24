let tasksList = ["Tomar café", "Reunião", "Brincar com o cachorro"];

tasksList.push("Fazer exercícios da Trybe"); //adiciona ao final
tasksList.unshift("Acordar"); //adiciona ao inicio
tasksList.pop(); //remove a ultima tarefa
tasksList.shift(); //remove a primeira tarefa
let indexOfTasks = tasksList.indexOf("Reunião"); //
console.log(indexOfTasks);
console.log(tasksList);
