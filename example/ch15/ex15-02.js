let d = new Date();
console.log(d);

d = new Date(2017,0);
console.log(d);
d = new Date(2017,1);
console.log(d);
d = new Date(2017,1,14);
console.log(d);
d = new Date(2017,1,14,14);
console.log(d);
d = new Date(2017,1,14,14,30);
console.log(d);
d = new Date(2017,1,14,14,30,5);
console.log(d);
d = new Date(2017,1,14,14,30,5,500);
console.log(d);

d = new Date(0);
console.log(d);
d = new Date(1000);
console.log(d);
d = new Date(1463443200000);
console.log(d);
d = new Date(-365*24*60*60*1000);
console.log(d);

d = new Date('June 14,1903');
console.log(d);
d= new Date('June 14,1903 GMT+0900');
console.log(d);
