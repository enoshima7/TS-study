/*
  基础类型 null object undefined symbol boolean void
*/
const count1: number = 123;
const teacher: string = 'will';
/*
  对象类型
*/
const teachers: { name: string; age: number } = {
  name: 'will',
  age: 18,
};
const number: number[] = [1, 2, 3, 4];
class person {}
const will: person = new person();
const getTotal: () => number = () => {
  return 123;
};
