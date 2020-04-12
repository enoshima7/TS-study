/*
  抽象类不能被new
  与interface的区别：
    抽象类主要是方法
    interface主要整个对象

*/
abstract class Geom {
  width: number;
  getType() {
    return 'Geom';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return 111;
  }
}
class Square {}
class Triangle {}
