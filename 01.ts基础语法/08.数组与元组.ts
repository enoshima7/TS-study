const numberArr: (number | string)[] = [1, 2, 3, 'a'];
const stringArr: string[] = ['a', 'b', 'c'];

// type alias
type User = { name: string; age: number };
const objArr: User[] = [
  { name: '1', age: 13 },
  { name: '2', age: 3 },
];

class Teacher {
  name: string;
  age: number;
}
const objArr1: Teacher[] = [
  { name: '1', age: 13 },
  { name: '2', age: 3 },
  new Teacher(),
];

/*
  元组：tuple
  规定数组里面每一项的类型
*/
const teacherInfo: [string, string, number] = ['William', 'male', 18];
