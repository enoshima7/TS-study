// type annotation
// type inference

let count2: number;
count2 = 1;

// 自动分析变量类型
let countInference = 123;

const firstNum = 1;
const secondNum = 2;
// const total = firstNum + secondNum;
function getTotal1(firstNum: number, secondNum: number) {
  return firstNum + secondNum;
}
const total = getTotal1(firstNum, secondNum);
const obj = { name: 'dell', age: 18 };
