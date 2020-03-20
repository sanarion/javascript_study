const obj = {};
obj.color = "黄色";
console.log(obj.color);
obj["not an identifier"] = 3;
console.log(obj);
console.log(obj["not an identifier"]);
console.log(obj["color"]);

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj.SIZE);