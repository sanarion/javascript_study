function launch() {
  return new Promise((onFulfilled,onRejected) => {
    if(Math.random() < 0.5) {
      return;
    }
    console.log("GO!");
    setTimeout(() => {
      onFulfilled("Take on orbit");
    },2*1000);
  });
}

function addTimeout(fn, period) {
  if (period === undefined) {
    period = 1000;
  }
  return  function(...args) {
    return new Promise((onFulfilled,onRejected) => {
      const timeoutId = setTimeout(onRejected,period,fn(...args)
        .then(function(...args) {
          clearTimeout(timeoutId);
          onFulfilled(...args);
        })
        .catch(function(...args) {
          clearTimeout(timeoutId);
          onRejected(...args);
        })
      );
    });
  }
}



launch()
  .then(msg => console.log(msg))
  .catch(()=>console.log("ERROR"))

