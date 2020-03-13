
//Arrow Functions (code more readable, more modern) 


//===============ES5 Function
/*
function printName(name){

    console.log("Hello "+name);
}

printName('Ashish');
*/

//===============ES6 Function 

const printName = name =>{

    return `Hi 
                ${name}`;      // using template literals
   //return 'Hi'+ name; 
}

//console.log(printName('Rohit'));

//=========== WithOut Return Statement

const printName1 = name => {
    
  return  printName(name);
};

console.log(printName('Monu'));

console.log(printName1('Abc'));
