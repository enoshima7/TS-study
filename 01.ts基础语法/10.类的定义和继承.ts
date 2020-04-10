/*
  类

*/
class Pers {
  name2: 'will';
  getName() {
    console.log(this.name2);
    return this.name2;
  }
}
class Student extends Pers {
  getStudentName() {
    console.log(this);
    return 'will';
  }
}
const person2 = new Pers();
const stu = new Student();
console.log(person2.getName());
console.log(stu.getStudentName());
