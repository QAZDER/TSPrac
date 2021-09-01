export {};

// 可以使用类型别名定义一个新的类型
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

type InspectType = 'inspect' | 'order';

const getName = (n: NameOrResolver, eventType: InspectType): Name => {
  if (typeof n === 'string') {
    return n;
  } else {
    return n()
  }
}
