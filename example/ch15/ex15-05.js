const moment = require('moment-timezone');

let d = new Date(Date.UTC(2017,1,14));
console.log(d);

d = moment.tz([2017,3,27,11,30],'Asia/Tokyo').toDate();
console.log(d);
