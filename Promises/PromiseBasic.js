

//
const promise=new Promise((resolve,reject)=>{

    setTimeout(()=> resolve("Done"),1000);
    
});

//console.log(Promise.);

promise.then((x)=>{
    console.log(x);
},(y)=>{
    console.log(y);
});

console.log(promise);