
//==============Using the static Promise.resolve method

Promise.resolve('Success').then((value)=>{

    console.log(value);                 //03
},()=>{
        //not called
});


//=============== Using the Resolving an array

Promise.resolve([1,2,3]).then((v)=>{
    console.log(v[0]);
});


//================ Resolving another Promise    

var original=Promise.resolve(33);
var value=Promise.resolve(original);
value.then(()=>{
    console.log(value);
});

console.log('original === cast ? ' + (original===value));   //01


//================ Resolving a thenable object

var p1 = Promise.resolve({ 
    then: function(onFulfill, onReject){
         onFulfill('fulfilled!'); 
        }
  });
  console.log(p1 instanceof Promise) // true, object casted to a Promise   //02
  
  p1.then(function(v) {
      console.log(v); // "fulfilled!"
    }, function(e) {
      // not called
  });