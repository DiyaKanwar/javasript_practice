


// setTimeout(function(){
// console.log("Diya")
// },0)
// console.log("Devashish")


// setTimeout(function(){
// console.log("Diya")
// },5000  )

//Higher order func. & callback
//callback function , a callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action
// function add(num1, num2, cb) {
//     let rs = num1 + num2

//     cb(rs)
// }

// function showResult(result) {
//     console.log(result)
// }

// add(8, 7, rs=>console.log(rs))

// cb = showResult()
//result = rs
// here we are calling a function as parameter inside another function  
// 
//callback is a function that calls 


// function mul(num1,num2,call)
// {
//  let m = num1*num2
//  call(m)
// }

// function res(rs)
// {
// console.log(rs)
// }
// mul(3,4,res)

function add(arr,cb) {
let solution= arr.filter((i)=>i%2==0)
cb(solution)
}
// function res(solution){
//  console.log(solution)
// }
// const arr=[7,8,6,9]
// add([2,3],(solution)=>console.log(solution))


// function sub(arr, cb) {
//     let solution = arr.reduce((prev, curr) => (prev + curr), 0);
//     cb(solution);
// }

// function res(solution) {
//     console.log(solution);
// }

// const arr = [7, 8, 6, 9];
// sub(arr, res);