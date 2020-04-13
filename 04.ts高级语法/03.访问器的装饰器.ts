/*
  访问器的装饰器：
  普通方法 target对应prototype key对应方法名字
  静态方法：target对应的是构造函数
*/
function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {}

class Start2 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(val) {
    this._name = val;
  }
}
const s2 = new Start2('will');
s2.name = '123';
console.log(s2.name);
