class P12 {
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
  set name(val: string) {
    const realName = val + '111';
    this._name = realName;
  }
}
const a12 = new P12('will');
console.log(a12.name);
a12.name = 'duan';
console.log(a12.name);

// 单例模式
class DL {
  private static dl: DL;
  private constructor(public name: string) {}
  // 把方法直接挂载到类上
  static getInstace() {
    if (!this.dl) {
      return new DL('will duan');
    }
    return this.dl;
  }
}
const dl1 = DL.getInstace();
const dl2 = DL.getInstace();
console.log(dl1.name);
console.log(dl2.name);
