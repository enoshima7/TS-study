// 开发过程中 发现潜在问题
// 更好的代码提示
// 代码语义更易阅读理解

// 类型别名
type point1 = { x: number; y: number };

// 接口
interface point2 {
  x: number;
  y: number;
}
function demo(data: point1) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
console.log(demo({ x: 1, y: 2 }));
