/*
  属性的装饰器
*/
function paramDec(target: any, key: string, paramIndex: number) {}
class Start4 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  getInfor(@paramDec name: string, age: number) {
    console.log(name, age);
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(val) {
    this._name = val;
  }
}
const s4 = new Start4('will');
s4.name = '123';
console.log(s4.name);
