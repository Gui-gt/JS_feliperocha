

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
const indexof = (names.indexOf('Gustavo')) // IndexOf para descobrir em qual posição esta o indice

const sortedNames = (names.sort())
console.log(sortedNames) // Sort organiza por ordem alfabetica

const namesIsArray = Array.isArray(names); //Para descobrir se é uma lista_Array
console.log(namesIsArray);


const numbers = [1,2,3,4,5]// Array com numeros

const numbersbyMultipliedbyTwo = numbers.map(function(number){
    return number * 2;
});// Map pode ser usado para multiplicar

console.log(numbersbyMultipliedbyTwo);

const ages = [10,20,15]

const sumOfages = ages.reduce(function(ages, accumulator){
    return ages + accumulator
//},0); // Reduce pode ser usado para somar valores dentro de um array
console.log(sumOfages)

const evenAges = ages.filter(function(age){
    return age % 2 === 0;
}); // filter pode separar numeros impares e pares

console.log(evenAges);
const ages = [12,22,30,15,17]

const agesTwosomed = ages.map(function(number){
    return number* 2
})

console.log(agesTwosomed)

const number = [10,22,33]

const evenNumbers = number.filter(function(number){
    return number % 2 === 0 
})
console.log(evenNumbers)

const idade = [10,12]

const somaIdade = idade.reduce(function(idade, soma){
    return idade + soma
},100)

console.log(somaIdade)


const person = { //array objeto
    firstname: 'Guilherme',
    lastName: 'Henrique',
    age:'20',
    hobbies: ['Ficar com a namorada','passear','estudar'],
    dog:{
        name: 'toi',
        age: '4'
    }//dados
}

 //const firstName = person.firstname
 //const lastName = person.lastName
 //const age = person.age
 //const hobbies = person.hobbies


// faz a mesma coisa que o de cima só que melhor;
const {firstname: primeiroNome, lastName, age, hobbies} = person;// juntando td


console.log(primeiroNome);// logando
console.log(lastName);
console.log(age);
console.log(hobbies);


console.log(person.dog.age)// logando

const tarefas = [
    {
        id:1,
        tarefa: 'Treinar',
        tarefa2: 'estudar'
    },
    {
        id:2,
        tarefa: 'Treinar',
        tarefa2: 'estudar'
    },
    {
        id:3,
        tarefa: 'Treinar',
        tarefa2: 'estudar'
    }
    ]// array normal
    
    const tarefasJSON = JSON.stringify(tarefas); //convertendo array para JSON para enviar para o backend ou para outro lugar
    console.log(tarefasJSON);
    
    const tarefasList = JSON.parse(tarefasJSON);//convertendo para array novamente
    console.log(tarefasList);
    
    for(let index = 1;index <= 3;index++){
        console.log(index);
    };
    
    const cars = ['Honda','Mitsubishi','Lamborghini'];
    
    for(let i = 0;i < cars.length;i++){
        console.log(cars[i]);
    }
    
    
    for (let car of cars){
        console.log(car)
    }
    
    cars.forEach(function(car,index){
        console.log(index);
        console.log(car);
    })

    let index = 0
while(index < 10){
    console.log(index)
    index++
}

const person = {
    name: 'Giovana',
    age: 21
}

for(properity in person){
    console.log(person[properity])
}

const sum = 1 + 2;

if(sum === 2){
    console.log(`Sum is 2`)

}else if(sum === 3){
    console.log('sum is 3')
}
else{
    console.log(`sum not or 2`)
}

// && and nessa condição, todas as condições precisam bater para ser true, n caso as duas

// || or nessa condição, se uma bater já vai dar true


//onst sum1 = 1+1;

//const sum2 = 2+2;

//if(sum1 === 2 && sum2 === 4){// nessa condição, todas as condições precisam bater para ser true, n caso as duas
//    console.log('sum1 is 4 and sum2 is four')
//}

//if(sum1 === 2 || sum2 === 4){// nessa condição, se uma bater já vai dar true
//    console.log('sum1 is 4 or sum2 is four')
//}

const sum = 1 + 2;

let number = sum === 2 ? 2 : 4;// mesma coisaque o de baixo.

//if(sum === 2){
//    number = 2
//}else{
//    number = 4
//}

console.log(number)

const  c = 0;
const b = null;
const a = undefined;
const d = '';
const lista = []
const person = {}
console.log('todos são false por não conter valor, apenas objetos e listas são true')

//True and false

let x = '';

console.log(!!x)

let a = null;

console.log(!!a)
let b = undefined;
console.log(!!b)
let c = 0;
console.log(!!c)

const list = [];
console.log(!!list)
const object = {};
console.log(!object);

