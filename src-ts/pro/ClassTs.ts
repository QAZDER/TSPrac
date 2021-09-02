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
    this.name = 0;
  }

  get name() {
    return 'name';
  }

  set name(value: string) {
    // name = value;
  }

  static shout() {
    console.log(111);
  }

  sayHi() {
    console.log('Meow: ', this.name);
  }
}

let smallCat = new Animal('Tom');
smallCat.sayHi();
Cat.shout();


class Father{
  public name;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Son extends Father{
  constructor(public name) {
    super(name);
  }
}

let father = new Son('ha');




