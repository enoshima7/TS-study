/*
  public:允许在类的内外被调用
  protected：允许在类内以及继承的子类中调用
  private：允许在类内被调用
*/
class Pers11 {
  name: string;
  protected sayHi() {
    console.log('hi');
  }
}
class Pers12 extends Pers11 {
  sayBye() {
    super.sayHi();
    console.log('bye');
  }
}
const p11 = new Pers11();
p11.name = 'will';
console.log(p11.name);
const p12 = new Pers12();
p12.sayBye();

class Pers13 {
  // 简化语法
  constructor(public name: string) {
    this.name = name;
    console.log(this.name);
  }
}
const pers13 = new Pers13('will222');
class Pers14 extends Pers13 {
  constructor(name: string, public age: number) {
    super(name);
    this.age = age;
    console.log(this.age);
  }
}
const pers14 = new Pers14('yiuyu', 17);
