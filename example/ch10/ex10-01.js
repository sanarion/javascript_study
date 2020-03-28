const u1 = {name:'花子'};
const u2 = {name:'和弘'};
const u3 = {name:'涼子'};
const u4 = {name:'哲人'};

const userRoles = new Map();
/*
userRoles.set(u1,'User');
userRoles.set(u2,'User');
userRoles.set(u3,'Admin');
*/
userRoles
  .set(u1,'User')
  .set(u2,'User')
  .set(u3,'Admin');

/*
Const userRoles = new Map([
  [u1,'User'],
  [u2,'User'],
  [u3,'Admin']
]);
*/
console.log(userRoles.get(u2));
console.log(userRoles.has(u1));
console.log(userRoles.size);

for (let u of userRoles.keys()) {
  console.log(u.name);
}
for (let r of userRoles.values()) {
  console.log(r);
}
for(let [u,r] of userRoles.entries()) {
  console.log(`${u.name} : ${r}`);
}

console.log(userRoles.keys());
console.log(userRoles.values());