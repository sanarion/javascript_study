const book = [
  "Line1",
  "Line2",
  "Line3",
  "Line4",
  "Line5",
  "Line6",
];

for (let apage of book) {
  console.log(apage);
}
console.log("--------------\n");

const it = book.values();
let current = it.next();
while (!current.done) {
  console.log(current.value);
  current = it.next();
}

class Log {
  constructor() {
    this.message = [];
  }
  add(message) {
    const now = Date.now();
    console.log(`Add log : ${message}(${now})`);
    this.message.push({message,timestamp:now});
  }
  [Symbol.iterator]() {
    return this.message.values();
  }
}
const log = new Log();
log.add('First Line');
setTimeout(() => log.add('see wholes'),3000);
setTimeout(() => log.add('see ships'),7000);
setTimeout(() => log.add('end'),9000);

setTimeout(() => {
  console.log(`Today's report (${new Date()})`);
  for (let entry of log) {
    const date = new Date(entry.timestamp);
    console.log(`${entry.message} (${date})`);
  }
},10000);
