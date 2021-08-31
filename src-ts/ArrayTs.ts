export {};
// 类型+方括号
const arr: number[] = [1, 2];

// 泛形
let arr1: Array<number> = [];

// 接口
interface NumberArray {
  [index: number]: number;
}

let arr2: NumberArray = [1];

console.log(arr);
console.log(arr1);
console.log(arr2);
