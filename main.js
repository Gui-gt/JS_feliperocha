const person = {
    firstname: 'Guilherme',
    lastName: 'Henrique',
    age:'20',
    hobbies: ['Ficar com a namorada','passear','estudar'],
    dog:{
        name: 'toi',
        age: '4'
    }
}

 //const firstName = person.firstname
 //const lastName = person.lastName
 //const age = person.age
 //const hobbies = person.hobbies


// faz a mesma coisa que o de cima só que melhor;
const {firstname: primeiroNome, lastName, age, hobbies} = person;


console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);


person.dog = 'Toi';
console.log(person)
