/*
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ['P','N','D','R'];
    this.userGear = this.userGears[0];
  }
  shift(gear) {
    if(this.userGears.indexOf(gear) < 0) {
      throw new Error(`Non-correct gear`);
    }
    this.userGear = gear;
  }
}
*/
/* 9.2.-4
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P','N','D','R'];
    this._userGear = this._userGears[0];
  }
  get userGear() {return this._userGear;}
  set userGear(value) {
    if(this._userGears.indexOf(value) < 0) {
      throw new Error(`Non-correct gear`);
    }
    this._userGear = value;
  }
  shift(gear) {
    this.userGear = gear;
  }
}
class Car {
  static getNextVin() {
    return Car.nextVin++;
  }

  constructor(make,model) {
    this.make = make;
    this.model = model;
    this.vin = Car.getNextVin();
  }
  static areSimilar(car1,car2) {
    return car1.make ===car2.make && car1.model === car2.model;
  }
  static areSame(car1,car2) {
    return car1.vin === car2.nextVin;
  }
}
Car.nextVin = 0;
*/
class Vehicle {
  constructor() {
    this.passengers = [];
    this.num = 0;
    console.log("Vehicleが生成された");
  }
  addPassenger(p) {
    console.log(`定員：${this.num},現在の乗員：${this.passengers.length}`);
    if (this.num > this.passengers.length) {
      this.passengers.push(p);
    }
    else {
      throw new Error("定員オーバー");
    }
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.num = 4;
    console.log("Carが生成された");
  }
  deployAirbags() {
    console.log("Bang!");
  }
}


/*
const car1 = new Car("Tesla","Model S");
const car2 = new Car("Mazda", "3i");
const car3 = new Car("Mazda", "3i");

console.log(car1.vin);
console.log(car2.vin);
console.log(car3.vin);

console.log(Car.areSimilar(car1,car2));
*/

const car1 = new Car();
car1.addPassenger('Sam1');
car1.addPassenger('Sam2');
car1.addPassenger('Sam3');
car1.addPassenger('Sam4');
car1.addPassenger('Sam5');
