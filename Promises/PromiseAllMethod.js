//Promise.all(iterable);


const promise1=Promise.resolve(3);
const promise2=42;
const promise3=new Promise((resolve,reject)=>{
   setTimeout(resolve,1000,'foo');    
});

Promise.all([promise1,promise2,promise3]).then((result) => {
    console.log(result);

});

//Promise.allSettled() method returns a promise that resolves after 
//all of the given promises have either resolved or rejected, with an 
//array of objects that each describes the outcome of each promise.

const promise4=Promise.resolve(4);
const promise5=23;
const promise6=new Promise(()=> setTimeout(reject,100,'foo'));
const promises=[promise4,promise5,promise6];

Promise.allSettled(promises).then((results)=>{
        results.forEach(result => {
            console.log(result.status);
        });
})
// expected output:
// "fulfilled"
// "rejected"

