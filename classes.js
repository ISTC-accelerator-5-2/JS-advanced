// const myPromise = new Promise();
// const date = new Date('1998-09-14');

class Person {
  constructor(firstName, lastName, age, profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.profession = profession;
  }

  speak() {
    console.log(`Hi my name is ${this.firstName}, ${this.lastName}.`);
    console.log(`I am ${this.age} years old.`);
  }

  study(newProfession) {
    this.profession = newProfession;
  }
};

const p1 = new Person('john', 'doe', 45, 'programmer');
const p2 = new Person('slim', 'shady', 13, 'student');

// p1.speak();
// p2.speak();

class Helper {
  constructor() {
    throw new Error('Cannot create a new instance of Helper');
  }

  static random() {
    return Math.random() * 100;
  }

  static factorial(n) {
    if (n === 2)
      return n;
    return n * Helper.factorial(n-1);
  }
};

// const helper = {
//   random: () => {},
//   factorial: () => {}
// };

// console.log(Helper.factorial(5));
// console.log(helper.factorial(8));

class Animal {
  constructor(color, name, legs, hasTail, type) {
    this.type = type;
    this.color = color;
    this.name = name;
    this.legs = legs;
    this.hasTail = hasTail;
  }

  run() {
    console.log(`Hello I am a ${this.type} and I am running`);
  }
};

// const myDog = new Animal('black', 'jecky', 4, true, 'dog');

class Dog extends Animal {
  constructor (color, name, hasEars) {
    super(color, name, 4, true, 'dog');
    this.hasEars = hasEars;
  }

  bark() {
    console.log(`Hello I am a ${this.type} and my name is ${this.name} and I am barking`);
  }
};

class Snake extends Animal {
  constructor (color, type) {
    super(color, 'no name', 0, true, 'snake');
    this.subType = type;
  }

  run() {
    throw new Error('snakes dont run!!!!');
  }
};

const myAnimal = new Animal('yellow', 'rex', 4, true, 'dog');
const myDog = new Dog('yellow', 'rex', true);

myDog.run();
myDog.bark();

const mySnake = new Snake('black', 'cobra');
mySnake.run();