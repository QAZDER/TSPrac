export {};

function createArr(length: number, value: any): Array<any> {
  const res = [];
  for (let i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
}

/**
 * 泛型
 * function functionName<T>(arg1: T): Array<T> {}
 */
function createArr1<T, X> (length: number, value: T): Array<T> {
  const res: T[] = [];
  for (let i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
}

interface LengthWise {
  length: number;
}

// 泛形的约束
function loggingIdentity<T extends LengthWise> (arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity({ length: 9 });

// 泛型多参数约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let o in source) {
    target[o] = (<T>source)[o];
  }
  return target;
}

const x = { a: 1, b: 2, c: 3 };
copyFields(x, { b: 10, c: 20 });

interface SearchFunc<T> {
  <T>(source: T, subString: T): boolean
}

let mySearchFunc: SearchFunc<string>;

mySearchFunc = function(source: string, subString: string) {
  return true;
}


interface User {
  name: string;
  id: number;
}

class UserAccount implements User{
  name: string;
  id: number;
  value: string;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

}

const user: User = new UserAccount('Tom', 1);

type result = true | false;



