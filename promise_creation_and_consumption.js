const promise=new Promise(function(resolve,reject){
setTimeout(()=>{
    console.log("diya")
    resolve()
})
})

// promise.then(()=>{
//     console.log("Promise consumed")
// }).catch(()=>{
//     console.log("Error")
// })

new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("ffggfgh")
        resolve()
        ,5000})
     
})
.then(()=>{
    console.log("Promise consumed")
})




