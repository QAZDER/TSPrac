export {};

interface Alarm {
  alert(): void;
}

// 接口继承另外的接口
interface LightAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}


class ProAlarm implements LightAlarm {
  alert() {
    console.log('alert');
  }

  lightOff() {
  }

  lightOn() {
  }
}

/**
 * 接口可以继承类
 * 当声明了一个类之后，可以同时将它作为类型使用
 * p: Point, 这是因为在声明了类之后，同时会创建一个 Point 的类型
 * 这个类型实际上与 PointInterface 等价
 * 它不包含构造函数、静态属性、静态方法， 即只有实例属性、实例方法
 * 因此当 interface extends class 时， 实际上继承的是类的实例类型
 */
interface AppleAlarm extends ProAlarm {

}

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

const obj = backpack.get();
