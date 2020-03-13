//ES5
console.log('Example:1');

function fun(a,b){
    return a+b;
}

console.log(2,1);
console.log(fun(2));    // 2 + undefined is NaN(not-a-number) 


//==== Default Parameter Error remove
console.log('Example:2');

function fun(a,b){
     b=(typeof b!=='undefine')?b:1;

     return a+b;
}

console.log(fun(2,1));
console.log(fun(2));

// ES6 
console.log('Example:3');

function fun(a,b=1){ 
    return a + b; 
} 
  
console.log(fun(2,1)); // 3 
console.log(fun(2)); // 3 