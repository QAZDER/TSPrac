export {};

// 数组内部是相同类型的对象，元组内部可以是不同类型的对象(js 数组)
// 属性与值一一对应
let tom: [string, number] = ['1', 2];
tom[0] = 'jerry';
tom[1] = 5;
tom.push(12);

// tom[1].toFixed();
