class Animal {
  constructor(name, species, numberOfLegs) {
    this.name = name;
    this.species = species;
    this.numberOfLegs = numberOfLegs;
  }

  takeANap() {
    console.log("zzzzzzz");
  }
}


class Cat extends Animal {
  constructor(name, species, numberOfLegs, age, color) {
    super(name, species, numberOfLegs);
    this.age = age;
    this.color = color;
  }
  sayMeow() {
    console.log("meoooowwww....");
  }
}


class Dog extends Animal {
  constructor(name, species, numberOfLegs, age, size) {
    super(name, species, numberOfLegs);
    this.age = age;
    this.size = `${size}kg`;
    this.treats = ["bone", "egg", "Hypo treat", "biscut"];

  }
  takeANap() {
    console.log("SNOORRIINNNGGG!!!!");
  }
  sayWoof() {
    console.log(`${this.name} says woof!`);
  }
  addTreat(nameOfTreat) {
    this.treats.push(nameOfTreat);
  }
  giveTreat(nameOfTreat) {
    const indexOfTreat = this.treats.indexOf(nameOfTreat);
    if (indexOfTreat >= 0) {
      this.treats.splice(indexOfTreat, 1);
    } else {
      console.log("they dont have that treat");
    }
  }
  logThis() {
    console.log("this in a class", this);
  }
}

const Luna = new Cat("Luna", "cat", 4, 7, "White");
console.log("Luna", Luna);
Luna.sayMeow();
Luna.takeANap();
const Ragnar = new Dog("Ragnar", "dog", 4, 3, 28);
console.log("Ragnar", Ragnar);
Ragnar.takeANap();

console.log("This globally scoped", this);


function logThis() {
  console.log("this inside a function, with the function", this);
}
const logThisWithArrow = () => {
  console.log("this inside a function, with arrow function", this);
};
logThis();
logThisWithArrow();
