// var p=new Promise((resolve, reject) => {
//   setTimeout(() => resolve("result"), 2000)
// })

 
//   p.then((result) => console.log(result)) 
//   .catch(()=>{})
//   .finally(() => {
//       console.log("Promise ready");
//  })

const promiseFinally = require('promise.prototype.finally');
promiseFinally.shim();

let test = new Promise((resolve, reject) => {
    throw new Error("error");
  });
  
  
  test.finally(() => console.log("Promise ready"));

