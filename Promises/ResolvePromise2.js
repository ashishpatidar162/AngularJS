let promise = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
  });

  promise.then((result) => {
      console.log(result);
  }).catch((err) => {
      
  });