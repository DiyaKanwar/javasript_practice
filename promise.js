console.log("Start of the script")
setTimeout(()=>{
    console.log("In settime out")
},0)
Promise.resolve().then(()=>{
    console.log("In promise-1")
    Promise.resolve().then(()=>{
    console.log("In promise-2")
Promise.resolve().then(()=>{
    console.log("In promise-3")
Promise.resolve().then(()=>{
    console.log("In promise-4")

    Promise.resolve().then(()=>{
    console.log("In promise-4")
Promise.resolve().then(()=>{
    console.log("In promise-5")
    Promise.resolve().then(()=>{
    console.log("In promise-6")

    })

    })
    })
    })
    })
    })
}) // promise is a  asynchornous object
console.log("End of the script")
