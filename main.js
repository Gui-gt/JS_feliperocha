const numbers = [1,2,3,4,6]

const numbersMultipliedbyTwo = numbers.map(function(number){
    return number * 2
})
console.log(numbersMultipliedbyTwo)

const ages = [4,11,7,16,40]

//const evenAges = ages.filter(function(age){
// return age % 2 === 0
//})
//console.log(evenAges)

const sunOfage = ages.reduce(function(ages, accumulator){
    return accumulator + ages;
},0);

console.log(sunOfage)