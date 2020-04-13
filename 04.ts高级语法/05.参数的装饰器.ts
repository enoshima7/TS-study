/*
  属性的装饰器
*/
function propDecorator(target: any, key: string): any {
  const descriptor: PropertyDescriptor = {
    writable: false,
  };
  return descriptor;
}
class Start3 {
  @propDecorator
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
const s3 = new Start3('will');
s3.name = '123';
console.log(s3.name);
