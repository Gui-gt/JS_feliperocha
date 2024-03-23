

const firstName = 'Guilherme'
const lastName = 'Henrique'

console.log(`Meu nome é ${firstName.toLowerCase()} ${lastName.toUpperCase()}`)


const names = 'Felipe,Guilherme,Maria'

console.log(names.split(','))


//Numbers
const number = 5
console.log(typeof number)
console.log(typeof number.toString())

//bolleans
//true or false
console.log(2 == 2)

//Null and Undefined

const x = null;
const z = undefined;

console.log(typeof x)

//Arrays

const list = [1,2,3,4,5,6];

//Objects
const object = {name: 'Felipe'}

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