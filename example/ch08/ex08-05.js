const arr = [5,7,2,4];
//const sum = arr.reduce((a,x) => a += x,0);
const sum = arr.reduce((a,x) => a += x);
console.log(sum);

const sum2 = arr.reduce((a,x) => a + x);
//const sum2 = arr.reduce((a,x) => a + x,2);
console.log(sum2);

const words = ["Baseball","Archery"];
console.log(words[0]);
console.log(words[0][0]);