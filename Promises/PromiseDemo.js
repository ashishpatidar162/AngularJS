
//Promises are used for asynchronous handling of events.
//Promises are used to handle asynchronous http requests.


 var promise=new Promise(function(resolve,reject){

    const x='abc';
    const y='abc';
    if(x==y){
       // console.log(x);
        resolve(x);    
    }
    else{
        // throw new Error('Some error has occured') 
        reject(y);
    }
 });   //Promise constructor


 promise.then(function(x){
   //  throw new Error('Throw first')
   console.log('Resolve Condition Executed')
 }).catch(function(y){
     console.log('Catch Blocked Executed '+y); //02
 });


 promise.then(function(){
     console.log('then Block func'); //01

     throw new Error('Some error has occured')

 }).catch(function(y){
    console.log('Catch Block Function Executed '+y); //03

 });

 //number of constructor arguments.

 console.log(Promise.length);
 console.log(Promise.prototype);