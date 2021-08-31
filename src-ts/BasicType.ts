// 先编译再执行 tsc xx.ts, 生成一个xx.js. node xx.js来执行
export {};

// boolean
let isDoing: boolean = false;

// wrong, new Boolean return Boolean object.
// let boole: boolean = new Boolean(1);
// right
let boole: boolean = Boolean(1);

// number
const count: number = 0;

// string
const name: string = 'name';

// void
function aler(value: string): void {
  console.log('name: ', value);
}

// null or undefined
let u: null = null;
let und: undefined = undefined;
