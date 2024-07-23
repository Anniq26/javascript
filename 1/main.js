console.log("this is working")

// let myName = 'Ani'
// myName='Giorgi'

// const myNumber = 10 
// const myStrNumber = '10'
// const myBoolean = true 

// console.log(typeof myName)
// console.log(typeof myNumber)
// console.log(typeof myStrNumber)
// console.log(typeof myBoolean)


// console.log( myNumber === myStrNumber)

// const a = 3
// const b = 7

// if (a+b === 8){
//     console.log(true)
// } else {
//     console.log(false)
// }

// function calculate(){
//    return 'Ani'
// }

// const myName = calculate()

// console.log(myName)

// function calculate(name){
//     return name
// }

// console.log(calculate('Ani'))
// console.log(calculate('Giorgi'))

// function calculate(num1, num2){
//     if(typeof num1 === 'string'){
//         return false
//     }

//     if(typeof num2 === 'string'){
//         return false
//     }
//     else{
//         return num1 + num2
//     }
// }
// console.log(calculate(1,'ani'))


// დავალება 1

function calculate (num1, num2){
    if(typeof num1 === 'string'){
        return "შეცდომა მატრიცაში"
    } 
    if(typeof num2 === 'string'){
        return "შეცდომა მატრიცაში"
    }else {
        return num1 + num2
    }
}

console.log(calculate(1, 4))

// დავალება 2

function temperature (farenheit){

    if (farenheit === 'string'){
        return false
    } else {
        return parseInt((farenheit - 32) / 1.8000);
    }
}

console.log(temperature(54))

// დავალება 3 

function calculation (a, b) {
    if(typeof a === 'string') {
        return false

    }

    if(typeof b === 'string') {
        return false
    }
    else{
        return a + b
}
}
console.log(calculation(5, 2))
console.log(calculation('ani', 2))
console.log(calculation(5, 'ani'))