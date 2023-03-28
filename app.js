const housingPromise = getRetailList('London');

housingPromise.then(
   (res)=>{
    if(res.properties && res.properties.length >0){
        console.log(`we found a house for you :${res.properties}`)
    }else{
        console.log(`Sorry , No house for You :${location}`)
    }
   }
    ,
    (error) => console.log(`Samething went wrong: ${error}`)
)
const networkReg = new Promise( (resolve,reject)=>{
    reject('No server found')
})

networkReg.then(
    null,
    (error)=>{console.log(error)}
)