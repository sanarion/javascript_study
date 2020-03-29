function* rainbow() {
  yield 'Red';
  yield 'Orange';
  yield 'Yellow';
  yield 'Green';
  yield 'Blue';
  yield 'Cyan';
  yield 'Purple';
}

const it = rainbow();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log("---------------");

for(let color of rainbow()) {
  console.log(color);
}

function* interrogate() {
  const name = yield "Your name?";
  const color = yield "what color you like";
  return `${name}-san like ${color}`;
}

const it2 = interrogate();
console.log(it2.next());
console.log(it2.next('YUTA'));
console.log(it2.next('Blue'));
console.log(it2.next());