let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  promise.then((m)=>{console.log(m)}); // shows "done!" after 1 second