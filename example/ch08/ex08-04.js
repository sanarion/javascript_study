/*
const cart = [ {name:"iPhone",price:54800},{name:"Android",price:49800}];
const names = cart.map(x => x.name);
console.log(names);
const prices = cart.map(x => x.price);
console.log(prices);
const discountPrices = prices.map((x) => {return x*0.8});
console.log(discountPrices);
const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);
*/
const items = [ 'iPhone', 'Android' ];
const prices = [ 54800, 49800 ];
const cart = items.map((x,i) => ({name:x,price:prices[i]}));
console.log(cart);

const cards = [];
for (let mark of ['h','c','d','s']) {
  for (let index = 1; index <= 13; index++) {
    cards.push({mark,index});
  }
}
/*
console.log(cards);
let card = cards.filter(x => x.index === 2);
console.log(card);
card = cards.filter(x => x.mark === 'h');
console.log(card);
*/

function translateSymbol(card) {
  const mark_symbol = {'h':'♡','c':'♧','d':'♢','s':'♤'};
  const number_symbol = {1:'A',11:'J',12:'Q',13:'K'};
  for (let num = 2; num <= 10; num++) {
    number_symbol[num] = num;
  }
  return mark_symbol[card.mark]+number_symbol[card.index];
}

let card = cards.filter(x => x.mark === 'd').map(translateSymbol);
console.log(card);