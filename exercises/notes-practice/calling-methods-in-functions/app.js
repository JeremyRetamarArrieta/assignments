function compute(num1, num2, callback){
    return callback(num1,num2)
}

function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

console.log(compute(3,5, add))
console.log(compute(67,5, subtract))