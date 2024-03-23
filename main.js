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