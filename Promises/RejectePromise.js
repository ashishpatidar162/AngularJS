
//Returns a new Promise object that is rejected with the given reason.

const rejected=(result)=>{
    console.log('rejcted ' + result);
} //First func

const resolved=(result1)=>{
    console.error('resolved' +result1);
}//Second func

Promise.reject(new Error('Fail')).then(resolved,rejected);