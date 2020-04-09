function hello() {}
const hello1 = function () {};
const hello2 = () => {};

function add(first: number, second: number): number {
  return first + second;
}
const total1 = add(1, 2);

function sayHello(): void {
  console.log('hello');
}

function erroEmitter(): never {
  // throw new Error();
  while (true) {}
}

// 解构赋值
function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getFirst({ first }: { first: number }): number {
  return first;
}
