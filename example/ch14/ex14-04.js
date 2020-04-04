const fstat = require("fs");

function grun(g) {
  const it = g();

  (function iterate(val) {
    const x = it.next(val);
    if (!x.done) {
      if (x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
      } 
      else {
        setTimeout(iterate,0,x.value);
      }
    }
  })();
}

function readFile(fileName) {
  return new Promise((onFulfilled,onRejected) => {
    fstat.readFile(fileName,"UTF-8",(err,data) => {
      err ? onRejected(err) : onFulfilled(data)
    });
  });
}

function writeFile(fileName,data) {
  return new Promise((onFulfilled,onRejected) => {
    fstat.writeFile(fileName,data, err => err ? onRejected(err) : onFulfilled("OK"));
  });
}

function* fileReadAndWriteFile() {
  const dataA = yield readFile("a.txt");
  const dataB = yield readFile("b.txt");
  const dataC = yield readFile("c.txt");
  yield writeFile('d.txt',dataA+dataB+dataC);
}
grun(fileReadAndWriteFile);