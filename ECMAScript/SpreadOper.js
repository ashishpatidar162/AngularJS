
console.log(Math.min(1,2,3,-1)); // -1 

console.log(Math);

// Without spread 
let arr = [1,2,3,-1]; 

console.log(Math.min(arr)); // NaN 

// Spread operator 
let arr1 = [1,2,3,-1]; 

console.log(Math.min(...arr1)); // -1 
