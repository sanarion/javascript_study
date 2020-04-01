//ex14-02-01
/*
console.log("before setTimeout : " + new Date());
function f() {
  console.log("In fucntion f : " + new Date());
}
setTimeout(f,10*1000);
console.log("after setTimeout : " + new Date());
console.log("after setTimeout2 : " + new Date());

//ex14-02-02
console.log("before setTimeout : " + new Date());
setTimeout(() => {
  console.log("In fucntion f : " + new Date());
},10*1000);
console.log("after setTimeout : " + new Date());
console.log("after setTimeout2 : " + new Date());

//ex14-02-02-2
console.log("before setTimeout : " + new Date());
setTimeout(() => console.log("In fucntion f : " + new Date()), 10*1000);
console.log("after setTimeout : " + new Date());
console.log("after setTimeout2 : " + new Date());
//ex14-02-3
const start = new Date();
let i = 0;
const intervalId = setInterval(function() {
  let now = new Date();
  if(now.getMinutes() !== start.getMinutes() || ++i >10) {
    return clearInterval(intervalId);
  }
  console.log(`${i} : ${now}`);
},5*1000);
//ex14-02-4
function countdown() {
  let i;
  console.log("countdown:");
  for(i=5;i>=0;i--) {
    setTimeout(function() {
      console.log(i===0 ? "GO!" : i);
    },(5-i)*1000);
  }
}
countdown();

//ex14-02-5
function countdown() {
  console.log("countdown:");
  for(let i=5;i>=0;i--) {
    setTimeout(function() {
      console.log(i===0 ? "GO!" : i);
    },(5-i)*1000);
  }
}
countdown();

//ex14-02-6
const fs = require('fs');
const fname = 'a.txt';
fs.readFile(fname,function(err,data) {
  if(err)
    return console.error(`read file error : ${err.message}`);
  console.log(`show file '${fname}' data : ${data}`);
});
//ex14-02-7
const fs = require('fs');
fs.readFile('a.txt',function(err,dataA) {
  if(err) console.error(err);
  fs.readFile('b.txt',function(err,dataB) {
    if(err) console.error(err);
    fs.readFile('c.txt',function(err,dataC) {
      if(err) console.error(err);
      fs.writeFile('d.txt',dataA+dataB+dataC,function(err) {
        if(err) console.error(err);
      });
    });
  });
});
*/
//ex14-02-08

const fs = require('fs');
function readSketchyFile() {
  try {
    fs.readFile('does_not_exist.txt',function(err,data) {
      if(err) throw err; //throw error in anonymous function,so error catch in readFile function.
    })
  } catch (error) { //catch error thrown in readSketcyFile only.
    console.log('WARNING');
  }
}
readSketchyFile();