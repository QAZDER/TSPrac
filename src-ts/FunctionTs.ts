export {};

// 函数声明
// 指定了默认值
function sum(first: number, second: number = 5): number {
  return first + second;
}

sum(1);

// 函数表达式
let sum1: (x: number, y?: number) => number = (
  first: number,
  second: number = 5,
): number => {
  return first + second;
};

sum1(2);

// 使用接口定义函数
interface SearchFunc {
  (firstNum: number, second: number): boolean;
}

let mSearchFunc: SearchFunc;
mSearchFunc = (first: number, second: number = 5) => {
  return !!second && first > second;
};

mSearchFunc(2, 1);

function addCount(first: number, ...item: number[]): number {
  return first + item.length;
}

addCount(1, 2, 3);
