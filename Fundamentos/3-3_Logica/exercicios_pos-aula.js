//1
// let fatorial = 10
// for(let index = 10; index > 0; index -=1) {
//     fatorial *= index;
// }
// console.log(fatorial)

//2
let word = "Banana"
let reverseWord = '';

for(let index = 0; index < word.length; index +=1) {
    reverseWord += word[word.length - 1 - index];
}
console.log(reverseWord);