// -----  Elemento de leitura  -----
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

// ---- CRIANDO ELEMENTOS ----
//createElement()
//appendChild()

// Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para `elementoOndeVoceEsta`.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild('filhoElementoOndeVoceEsta');

// Crie um filho para `primeiroFilhoDoFilho`.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); // Recupere o elemento com o id `primeiroFilhoDoFilho`
const filhoPrimeiroFilhoDoFilho = document.createElement('section'); // Crie um novo elemento 
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho); // Adicione o elemento criado como filho do elemento `primeiroFilhoDoFilho`

// A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho = filhoPrimeiroFilhoDoFilho
    .parentElement // primeiroFilhoDoFilho
    .parentElement // elementoOndeVoceEsta
    .nextElementSibling; // terceiroFilho
console.log(terceiroFilho);


