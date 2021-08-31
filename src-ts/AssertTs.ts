export {};

interface ICat {
  name: string;
  run(): void;
}

interface IFish {
  name: string;
  swim(): void;
}

/**
 * 当animal不确定联合属性的变量到底是ICat还是IFish时
 * 只能访问联合类型的所有类型中的共有属性或方法
 * 此时可以使用断言，将animal断言为IFish
 * TypeScript的编译器不会报错
 */
function getName(animal: ICat | IFish): string {
  // if (animal.swim === 'function') {
  // error
  // }
  if (typeof (animal as IFish).swim === 'function') {
    return animal.name;
  }
  return animal.name;
}

const cat: ICat = {
  name: 'mini',
  run: () => {
    console.log('run');
  },
};

// 临时将cat断言为any, 添加了接口中未定义的foo属性
(cat as any).foo = 1;

getName(cat);

