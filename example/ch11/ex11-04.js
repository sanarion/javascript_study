function a() {
  console.log('Before : a call b');
  b();
  console.log('After : a call b');
}
function b() {
  console.log('Before : b call c');
  c();
  console.log('Function b end');
}
function c() {
  console.log('Fucntion c : throwing error');
  throw new Error('c error');
  console.log('Function c : end');
}
function d() {
  console.log('Before : d call c');
  c();
  console.log('Function d : end');
}

try {
  a();
}
catch(err) {
  console.log("--------err.stack after calling a------------");
  console.log(err.stack);
  console.log("----------End--------------------------------");
}

try {
  d();
} catch (err) {
  console.log("--------err.stack after calling d------------");
  console.log(err.stack);
  console.log("----------End--------------------------------");
}