/*
  方法装饰器：
  普通方法 target对应prototype key对应方法名字
  静态方法：target对应的是构造函数
*/
function decorator1(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => {
    console.log(111);
  };
}

class Start111 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @decorator1
  getName() {
    console.log(this.name);
  }
}
const s111 = new Start111('will');
s111.getName();
