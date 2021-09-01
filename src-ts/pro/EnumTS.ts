export {};

// 默认情况下，赋值从0开始
enum Days { Sun, Mon, TUE}

// Sun = 0
console.log(Days['Sun'] === 0);

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name
  }

  sayHi(): void {
    console.log('My name is' + this.name);
  }
}

class Dog extends Animal {
  sayHi() {
   console.log('cat');
  }
}

const cat = new Animal('tom');
cat.sayHi();

/**
 * 手动赋值，后一个根据前一个+1， 此时默认复制会覆盖手动赋值
 */
enum Months { Jan = 12, Fer= 1, Mar, Apr }
