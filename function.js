
// function fun(){
//     console.log("Diya kanwar")
// }
// fun()

function addition(num1, num2) {

    if (typeof (num1) === "number" && typeof (num2) === "number") {
        console.log(num1 + num2)
    }
    else {
        // console.log("Invalid Input,num1 & num2 type is "+typeof(num1)+" and "+ typeof(num2)+" Please enter a string")
        console.log(`Invalid Input\nnum1 type is ${typeof (num2)} & num2 type is ${typeof (num2)} \nPlease enter a string`)
    }
}

function user(name = "guest", email, id) {

    // if( typeof(email) == "string" && typeof(id)=="number"){
    console.log(`user's name is ${name}, user's email is ${email}, user's id ${id}`)
    // }
    // else{
    // console.log("User's Data is not accessible")
    // }

}


function addi(num1, ...num) {

    console.log(typeof (num))
    let rs = num1
    for (let i = 0; i < num.length; i++) {
        rs *= num[i]
    }
    console.log(rs);
}
addi(1, 4, 10, 5, 89, 90, 6)



// user("avc","@gmail.com",88)
// user(undefined,"uuyy",78)
// addition(5,'f')
// {
//     email:"@gmail.com",
//     id:88
// }

// const obj ={
// username: "Diya",
// email:"kanwardiya1@gmail.com",
// uid:"22BCS10472"
// }

// function examfun(obj){
//     console.log(`your username is ${obj.username} , email id is ${obj.email} , uid of the user is ${obj.uid}`)

// }
// examfun({
// username: "Diya",
// email:"kanwardiya1@gmail.com",
// uid:"22BCS10472"
// })
// fun1("22BCS10472")
// function fun1(uid){
// console.log("dffrhf", uid)
// }


// const fun2=function(uid){
//     console.log(`Hi Diya kanwar your UID is ${uid}`)
// }
// fun2("22BCS10248")

// function fun(name){
// console.log(`User name is ${name}`)

// }
//  fun("Diya")

// Arrow Function

// const fun2=(uid)=>{
//     console.log(`Hi Diya kanwar your UID is ${uid}`)  //arrow function ()=>{}
// }
// fun2("22bcs10472")

// const fun3=()=>{
//     console.log("User name is Diya")
// }
// fun3()
// function addition(num1,num2){
//     return num1+num2
// }
// const rs=addition(9,5)
// console.log(addition(1,4))


//1. const addtwo=num=>num+2
//implicit return without paranthesis because its a single parameter passed
// console.log(addtwo(9))

//2. const addt=(num)=>num+2
//implicit return but here optional paranthesis is used , we have to use paranthesis for multiple return as well 
// console.log(addtwo(9))


//3. const add= (num1,num2)=>num1+num2
//     //implicit return , here the parathesis in return is optional
// add(1,3)

//4. const addition=(num1,num2)=>
//     {return num1+num2}                //explicit return 
 
// console.log(addition(2,3))


//5. const addition=(num1,num2) => ({username:"Diya"}) // here the paranthesis in return in case of objects is necessary
// implicit return whe
// console.log(addition(5,6))

//IIFE(immediately invoked function expression)