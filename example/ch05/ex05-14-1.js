const obj = {b:2,c:3,d:4};
//const {a,b,c,d} = obj;
let a,b,c;
({a,b,c} = obj);
console.log(a);
console.log(b);
console.log(c);
//console.log(d);

const arr = [1,2,3];
let [x,y] = arr;
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);
let options;

console.log(options);
options = options || {};
console.log(options);