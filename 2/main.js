// const user = {
//     name: 'James',
//     lastName: 'Bond',
//     userName: '007',
//     move: function (){
//         console.log('James Bond in action')
//     }
// }

// console.log(user.name, user.lastName, user.userName)
// user.move()


// პრიმიტიული ტიპები

// let A = 30
// let B = A
// A = 45
// console.log(A)
// console.log(B)


// არაპრიმიტიული ტიპები

// const C = {
//         name: 'James',
//         lastName: 'Bond',
//         userName: '007',
//     }
// const D = C

// A.userName = 'Agent 007'

// console.log(C)
// console.log(D)


// მასივები

// const array = ['James', 'Giorgi', 'Ani']

// console.log(array.length)
// console.log(array[2])


// loop ციკლური ოპერაციები მასივებზე იტერაცია. 

// const arr = ['James', 'Giorgi', 'Ani']

// for loop იტერაცია
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] + ' ' + 'is moving')
// }

// for...of loop იტერაცია
// for(const item of arr){
//     console.log(item)
// }


// const M = {
//         name: 'James',
//         lastName: 'Bond',
//         userName: '007',
//     }

//     for(const field in M){
//         console.log(M[field])
//     }


// while loop

// function randomNumber(){
//     return parseInt(Math.random() * 10 ) +1
// }
// let result = randomNumber()

// while(result !==10 ){
//     result = randomNumber()
//     console.log(result)
// }

// do{    result = randomNumber()
//     console.log(result)
// } while (result !==10)


// მასივის ჩაშენებული ფუნქციები

const arr = ['James', 'Giorgi', 'Ani', 'Nino']

// foreach() ფუნქცია

// const resForEach = arr.forEach(function(element, index) {
//     return index + ' is equal to ' + element
// })


// map() ფუნქცია
// const resMap = arr.map(function(element, index) {
//     return index + ' is equal to ' + element
// })

// console.log(arr)
// console.log(resMap)


// filter() ფუნქცია

// const array = [1, 5, 2, 5, 7, 1, 9]
// const resFilter = array.filter(function(element){
//     return element >= 5
// })

// console.log(array)
// console.log(resFilter)


// find() ფუნქცია

// const array = [1, 5, 2, 5, 7, 1, 9]

// const resFind = array.find(function(el){
//     return el > 5
// })

// console.log(array)
// console.log(resFind)

