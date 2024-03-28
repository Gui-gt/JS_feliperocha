function sum (a,b = 10){
    return(a+b)
}

const sumValue = sum(2)
console.log(sumValue)

const sumArrow = (a,b = 12) => a + b;

const sumvArrow = sumArrow()

console.log(sumArrow(2))