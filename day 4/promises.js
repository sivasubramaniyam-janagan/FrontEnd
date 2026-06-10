const myPromise=new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            console.log("nono")
            resolve()
        },4000)
    }
)


myPromise.then(
    ()=>{
        console.log("hello")
    }
)