'use strict';
const fs = require('fs');

/*
function readFile(fileName) {
  return new Promise(
    (onFullfilled,onRejected) => {
      fs.readFile(fileName,"UTF-8",(err,data) => {
        //console.lof(data);
        if(err) {
          //console.error("Read file error:" + filename + err);
          onRejected(err);
        }
        onFullfilled(data);
      });
    }
  );
}

function writeFile(fileName,data) {
  return new Promise(
    (onFullfilled,onRejected) => {
      fs.writeFile(fileName, data, err => {
        if (err) {
          //console.error("Write file error:" + filename + err);
          onRejected(err);
        }
        onFullfilled("OK");
      });
    }
  );
}

let allData = "";
Promise.all([readFile("a.txt"),readFile("b.txt"),readFile("c.txt")])
.then(function(results) {
  const allData = results[0] + results[1] + results[2];
  return writeFile("d.txt", allData);
})
.then(function(mes) {
  console.log("succeeded!");
})
.catch(err => {
  console.error("Error!");
});
readFile("a.txt")
  .then((fileData) => {
    allData += fileData;
    return readFile("b.txt");
  })
  .then((fileData) => {
    allData += fileData;
    return readFile("c.txt");
  })
  .then((fileData) => {
    allData += fileData;
    return writeFile("d.txt",allData);
  })
  .then((msg) => {
    console.log("Write file is succeeded!");
  })
  .catch((msg)=> {
    console.error("Error occured : " + msg);
  })
  */

//ex14-03-06-4

function writeFile(fileName,data) {
  return new Promise((onFullfilled,onRejected) => {
    fs.writeFile(fileName,data, err => {
      err ? onRejected(err) : onFullfilled('OK');
    });
  });
}

function readFile(fileName) {
  return new Promise((onFullfilled,onRejected) => {
    const period = Math.random()*1000;
    console.log(`${fileName} : ${period}`);
    setTimeout(() => {
      fs.readFile(fileName,"utf-8",(err,data) => {
        err ? onRejected(err) : onFullfilled([fileName,data]);
      });
    },period);
  });
}

let selected;
Promise.race([readFile("a.txt"),readFile("b.txt"),readFile("c.txt")])
  .then(function(result) {
    selected = result[0];
    return writeFile("d.txt",result[1]);
  }) 
  .then(function(msg) {
    console.log(`file ${selected} is written`);
  })
  .catch(function(msg) {
    console.error(`error is occured : ${msg}`);
  })