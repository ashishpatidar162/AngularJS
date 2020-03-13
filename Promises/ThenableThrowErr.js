
//============================== Resolving thenables and throwing Errors

// Thenable throws before callback
// Promise rejects
/*
var thenable={
    then:function(resolve){
        throw new TypeError('Throwing Error before resolve');
        resolve('Resolving');
    }
};


var p1= Promise.resolve(thenable);

p1.then((v)=>{
    //not called
}).catch((e)=>{
    console.error("here");
    console.error(e); //TypeError: Throwing Error before resolve
})
*/

var thenable1={
    then:function(resolve){
        resolve('Resolving')
        throw new TypeError('Throwing Error after resolve');
    }
}

var p2=Promise.resolve(thenable1);

p2.then((v)=>{
    console.log(v); // "Resolving"
},(e)=>{
    //not called
})

