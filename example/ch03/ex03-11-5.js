const sam1 = {
  name:'Sam',
  age: 4
};
console.log(sam1);

const sam2= {name: 'Sam', age: 4};
console.log(sam1.name === sam2.name);
console.log(sam1.age===sam2.age);
console.log(sam1===sam2);
console.log(sam1==sam2);

const sam3 = {
  name:'Sam',
  classification: {
    kingdom:'Animalia',
    plylum:'Chordata'
  }
};
console.log(sam3);

console.log(sam3.classification.kingdom);
console.log(sam3["classification"].kingdom);
console.log(sam3.classification["kingdom"]);
console.log(sam3["classification"]["kingdom"]);

sam3.speak = function () {return "Meow!"};
sam3.speak2 = () => {return "MeowMeow!"};
sam3.speak3 = () => "MeowMeowMeow";

console.log(sam3.speak());
console.log(sam3.speak2());
console.log(sam3.speak3());