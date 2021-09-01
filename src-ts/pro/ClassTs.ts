export {};

class Animal {
  public name;
  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    console.log(`My name is ${this.name}`);
  }
}

let a = new Animal('something');
a.sayHi();

class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log('cat: ', this.name);
  }

  sayHi() {
    console.log('Meow: ', this.name);
  }
}

let smallCat = new Animal('Tom');
smallCat.sayHi();
