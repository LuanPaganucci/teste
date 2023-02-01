// Elemento de leitura
// parentNode: retorna o nó pai.

// parentElement: retorna o elemento pai.

// childNodes: retorna um NodeList com todos os nós filhos.

// children: retorna um HTMLCollection com todos os elementos filhos.

// firstChild: retorna o primeiro nó filho.

// firstElementChild: retorna o primeiro elemento filho.

// lastChild: retorna o último nó filho.

// lastElementChild: retorna o último elemento filho.

// nextSibling: retorna o próximo nó.

// nextElementSibling: retorna o próximo elemento.

// previousSibling: retorna o nó anterior.

// previousElementSibling: retorna o elemento anterior.

// arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho').innerText = "Testando innerText";
const primeiroFilho = pai.firstElementChild;
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
const Atenção = elementoOndeVoceEsta.nextSibling
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;


