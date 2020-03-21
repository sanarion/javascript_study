/*if (undefined) {
  console.log("true");
} else {
  console.log("false");
}

if (null) {
  console.log("true");
} else {
  console.log("false");
}
if (0) {
  console.log("true");
} else {
  console.log("false");
}
if ('') {
  console.log("true");
} else {
  console.log("false");
}
if ("") {
  console.log("true");
} else {
  console.log("false");
}
const obj1 = {};
if (obj1) {
  console.log("true");
} else {
  console.log("false");
}
const arr = [];
if (arr) {
  console.log("true");
} else {
  console.log("false");
}
*/
const skipIt = true;
let x = 0;
const result = skipIt || x++;
console.log(result);
console.log(x);

console.log("----------");
console.log(`0 && false -> ${0 && false}`);
console.log(`0 && true -> ${0 && true}`);
console.log(`true && NaN -> ${true && NaN}`);
console.log(`1 && true -> ${1 && true}`);
console.log("----------");
console.log(`0 || true -> ${0 || true}`);
console.log(`0 || 1 -> ${0 || 1}`);
console.log(`true || NaN -> ${true || NaN}`);
console.log(`1 || true -> ${1 || true}`);

const suppliedOptions = null;
const options = suppliedOptions || {name:"default"};
console.log(options);