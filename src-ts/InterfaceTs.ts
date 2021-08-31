export {};

/**
 * 当定义了任意属性，那么确定属性和可选属性的类型都必须是它的子集
 * age 属性为可选时，有可能为undefined, 所以任意属性需要加入undefined
 */
interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
  [propertyName: string]: number | string | undefined;
}

let tom: IPerson = {
  id: 12,
  name: 'tom',
  age: 12,
  gender: 'fal',
};

/**
 * 当定义了任意属性，那么确定属性和可选属性的类型都必须是它的子集
 * 需要注意的是:
 * 1. 当任意属性的类型为number时([index: number]: number),
 * 那么它只会影响类型为number的属性的相关签名  IArgue1
 * 2. 当任意属性的类型为string时([index: string]: number),
 * 那么它会同时影响类型为number和string属性的签名  IArgue2
 */
interface IArgue1 {
  1: number;
  name: Function;
  [index: number]: number;
}

interface IArgue2 {
  1: number;
  name: Function;
  [index: string]: string | Function | number;
}

function sum(a: number, b: number) {
  console.log('arguments: ', arguments);
  let arg: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;

  console.log(a + b);
}

sum(1, 2);

console.log(tom);
