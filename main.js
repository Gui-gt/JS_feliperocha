const numbers = [1,2,3,4,5];

const numberSum = numbers.reduce(function(numbers, acumulator){
    return numbers + acumulator
})

console.log(numberSum);