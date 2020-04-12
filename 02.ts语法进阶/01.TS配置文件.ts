/*
  tsc --init

  ts-node 也会使用tsconfig.json

  限制编译文件：
  "include": ["xxx.ts"],
  "exclude": ["xxx.ts"],
  "files":["xxx.ts","sss.ts"]

  编译输入输出文件位置
  "outDir":"./build"
  "rootDir": "./",

  "incremental" 只编译改动过的
  "allowJs"  JS也可以被编译
  "checkJs" 检测JS
  "noImplicitAny" 是否必须显示注明any类型
  "strictNullChecks" 是否强制检测null类型
*/
const a1 = 'dell';
