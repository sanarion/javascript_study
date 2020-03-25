const SYM = Symbol();
const o = {a:1,b:2,c:3,[SYM]:4};

//for-in loop
for (const key in o) {
  if (o.hasOwnProperty(key)) {
    const element = o[key];
    console.log(`${key} : ${element}`);
  }
}

////object.key
const propArray = Object.keys(o);
console.log(propArray);
console.log("-------");
propArray.forEach(prop => console.log(`${prop} : ${o[prop]}`));