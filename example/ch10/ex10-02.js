const SecretHolder = (function() {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this,secret);
    }
    getSecret() {
      return secrets.get(this);
    }
  }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('SECRET_A');
b.setSecret('SECRET_B');
console.log(a.getSecret());
console.log(b.getSecret());