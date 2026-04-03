
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

