/*
  <T>来规定参数或者返回值是T类型
*/
function a4<T, P>(a: T, b: P) {
  return 111;
}
a4<string, number>('a', 123);
