/*
  类的装饰器：
    装饰器本身是一个函数
    通过@符号来使用
*/
function decorator() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      getName() {
        console.log(this.name);
      }
    };
  };
}
const Start = decorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);
const s = new Start('will');
s.getName();
