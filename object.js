// const a = Symbol("A")
/*
const obj = {
    username: "diya",
    email: "diya1@gmail.com",
    password: "***",
    "full name": "Diya Kanwar",
    bool: true,
    [a]: "abc",

    obj2:  {
        hj: {
            ab: "kjj",
            kl: "oijj"
        },
        date: "5",
        "first name": "Diya"
    }
}

const obj3={
    username: "Devashish",
    id:122,
    email:"1@gmail"
}
const obj4={
    pass:"124",
    id2:"22H"
}
const obj5={
    obj3,
    obj4
} 

// const newob= Object.assign({ },obj3,obj4)
const newobject= {...obj3,...obj4}
// console.log(newob)
console.log(newobject)
// */
// const arr=[
//      {
//       password: "amazon", 
//       email:"kanwar@gmail.com", 
//       id: {
//        //id1: 4344,
//         id2: 33
//       }
//     },
//     {
//         age:22,
//         gender: "female"
//     }
// ]   
// // console.log(arr[1].gender)

// console.log(arr[0].id?.id1)

// console.log(arr)  
// console.log(arr[password])
// console.log(obj5)
// console.log(obj)

// console.log(obj.obj2.hj.ab)

// console.log(typeof(obj.a))
// console.log(obj[a])
// console.log(obj)
//console.log(obj.username)
// console.log(obj["username"])
// console.log(obj["full name"])



// Object.freeze(obj)
// obj.username="Diya"

// obj.first="User"
// console.log(obj.username)
//console.log(obj)

/* obj.greet = function(){
  console.log("hello user")
}  */

//  console.log(typeof(obj))

// const obj =
// {
//     userid: "3D",
//     email:"user@1",
//     name: "User",
//     full_name:"Diya Kanwar"
// }
// function fun(object)
// {
//  const {userid,email,name,full_name}=object   
//  console.log(userid)

// console.log(`userid is ${userid} , email of the user is ${email} , name of the user is ${name} full name is ${full_name}`)
// // console.log(this)
// }

// // fun(obj.userid,obj.email,obj.name)
// fun(obj)

// function fun(name){
//     console.log(name)
// }
// fun("Diya")



// const obj =
// {
//     id: 1,
//     email:"user@1",
//     username: "User123",
//     full_name:"Diya Kanwar"
// }
// // Object Destructuring
// const {id,email,username:un,full_name:fn}= obj
// function fun(data){
//     
//     console.log(`userid is ${id} useremail is ${email}, username is ${un} , user full name is ${fn}`)
// }
// fun(obj)


const obj3={
    username: "Devashish",
    id:122,
    email:"1@gmail"
}

// console.log(obj3.hasOwnProperty("h"))
//hasOWN property
// console.log(obj3)

delete obj3.id
// console.log(obj3)


//Freeze can only perform read in CURD 
// seal can perfornm read and upate operations in CURD

obj3.id=11
obj3.name="User"
console.log(obj3)
// Object.freeze(obj3)
Object.seal(obj3)
// obj3.id=44

// delete obj3.id
// obj3.age=23
obj3.name="user2"
console.log(obj3)

// console.log("Hell")


