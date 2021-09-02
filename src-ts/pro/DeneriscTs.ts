export {};

function createArr(length: number, value: any): Array<any> {
  const res = [];
  for (let i = 0; i < length; i++) {
    res[i] = value;
  }
  return res;
}

// 泛形
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

// 泛型多参数约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let o in source) {
    target[o] = (<T>source)[o];
  }
  return target;
}

const x = { a: 1, b: 2, c: 3 };
copyFields(x, { b: 10, c: 20 });

interface SearchFunc {

}
