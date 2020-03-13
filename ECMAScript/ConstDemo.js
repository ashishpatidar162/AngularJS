/*
//============= Const used with Variable

const name='ashish'; // immutable variable 

// Trying to reassign a const variable 
name='rahul';
console.log(name);
*/

//============= Const used with Object 


        //Object properties are mutable
const person={
    name:'Mukul Patidar',
    age:21,
    isPlaced:true
};

console.log(person.name);

    //Trying to reassign a const Object
person.name='rahul';
person.isPlaced=false;

console.log(person.name);
console.log(person.isPlaced);


