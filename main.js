const names = ["Felipe","João","Julia",10,false];

const joao = names[1]
console.log(joao)

names.push("Pedro"); //add no final da lista
names.unshift(20); // add no inicio da lista
names.pop(); // remove da lista
console.log(names) // imprime no console

names [3] = "Gustavo" // altera a constante

console.log(names)
const indexof = (names.indexOf('Gustavo'))

const sortedNames = (names.sort())
console.log(sortedNames)

const namesIsArray = Array.isArray(names);
console.log(namesIsArray);

