/*
  类加上泛型
  利用extends
*/
class A5<T extends string | number> {
  constructor(private name: T) {}
}
const a5 = new A5<string>('duan');
