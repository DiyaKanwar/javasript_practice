const arr = [
  {
    pId: "1",
    pName: "Television",
    pPrice: 1500
  },
  {
    pId: "2",
    pName: "Laptop",
    pPrice: 55000
  },
  {
    pId: "3",
    pName: "Smartphone",
    pPrice: 20000
  },
  {
    pId: "4",
    pName: "Headphones",
    pPrice: 2500
  },
  {
    pId: "5",
    pName: "Washing Machine",
    pPrice: 18000
  }
];

// const rs= arr.reduce((prevo, curro)=>prevo*curro.pPrice)
// console.log(rs)

const arr2=[2,3,4,5,10,23]
//destructuring in array 
const [num1,num2,...rest] =arr2//num1=2,num2=3,rest[4,5,10,23]

// console.log(rest)
//for each
// arr2.forEach((num,i,ar)=>{
//   console.log(`index ${i}, has value ${ar[i]}, ghghg:  ${num} `)
// })

const obj3={
    username: "Devashish",
    id:122,
    email:"1@gmail"
}


//for in loop //index
for(const k in ob3j){
console.log(obj3[k])
}

// for of loop
//value
// for(const n of arr2 ){
//   console.log(n)
// }

//SOME Function,returns a boolean value if the conditon is true for any one of the integer 
// const arr=[5,1,2,3]
// const rs=arr.some((num)=>num>4)
// //even if one is true it will result in true
// // console.log(rs)


// //Every method
// //for all elements 
// const arr2=[3,3,3]
// const out=arr2.every((num)=>num==3)
// console.log(out)
