class Vehicle{ 
    constructor(name,engine,roll){ 
        this.name = name; 
        this.engine = engine; 
        this.roll=roll;
    } 
} 
  
const bike1 = new Vehicle('Ninja ZX-10R','998cc'); 
const bike2 = new Vehicle('Duke','390cc','as'); 
  
console.log(bike1.name); // Ninja ZX-10R 
console.log(bike2.name); // Duke 
console.log(bike2.roll); 
//console.log(bike1.roll);