let promise = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });

  promise.then((result) => {
      console.log(result);
      
  }).catch((err) => {
      
  });