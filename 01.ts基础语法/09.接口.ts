/*
  接口:
  通用类型的集合用接口

  type和接口的区别：
  接口只能代表一个对象或者函数，type别名也能代表基本类型 

  并不会真正变成js代码，只是一个帮助验证类型的
*/
interface Person {
  // readonly name: string; // 只读
  name: string;
  age?: number; // age属性可有可无
  [propName: string]: any;
  say?(): string;
}
// 接口可以继承
interface Teacher1 extends Person {
  teach(): string;
}
// 接口还可以直接定义一个方法类型
interface Say {
  (word: string): string;
}

const getPersonName = (person: Person) => {
  console.log(person.name);
};
const setPersonName = (person: Person, name: string) => {
  // person.name = name; // 无法修改
  person.name = name;
};

const person1 = {
  name: 'will',
  sex: 'male', //多一个属性
};
getPersonName(person1);
getPersonName({
  name: 'will',
  // sex: 'male', // 直接传字面量会报错
});
getPersonName({
  name: 'will',
  sex: 'male', // [propName: string]: any; 就不报错
});
setPersonName(person1, 'duan');

class User1 implements Person {
  name: 'will';
}
const say: Say = (word: string) => {
  return word;
};
