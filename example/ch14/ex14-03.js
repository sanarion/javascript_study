function countdown(seconds) {
  return new Promise(function(onFulfilled,onRejected) {
    const timeoutIds = [];
    for (let i = seconds; i >= 0; i--) {
      timeoutIds.push(setTimeout(
        () => {
          if (i === 13) {
            timeoutIds.forEach(clearTimeout);
            onRejected(new Error(`${i} is so unlucky.`));
          }
          if (i > 0) {
            console.log(i + "...");
          }
          else {
            onFulfilled(console.log("GO!"));
          }
        },(seconds-i)*1000)
      );
    }
  });
}

function launch() {
  return new Promise(function(onFulfilled,onRejected) {
    console.log("Fire!");
    setTimeout(() => {
      onFulfilled("Take on line");
    },2*1000);
  });
}

//ex14-03-01
/*
countdown(15).then(
  function() {
    console.log("success!");
  },
  function(err) {
    console.log("Error : " + err.message);
  }
)
//ex14-03-1-3

const p = countdown(15);
p.then(() => console.log("success!"));
p.catch((err) => console.log("Error : " + err.message));
*/

//ex14-03-6
countdown(5)
  .then(launch)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("Error occuerd" + err);
  })


  
