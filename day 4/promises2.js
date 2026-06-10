let password = "jana123"

let user = "jana123"

const myPromise=new Promise(
    (resolve,reject)=>{
        if (user==password){
            console.log("correct password")
            resolve("welcome")
        }
        else{
            reject("error")
        }
    }
)

myPromise.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})