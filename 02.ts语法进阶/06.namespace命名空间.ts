/*
  把私有类封装 
  用export暴露

  "outFile" 把输出文件弄成一个
  把module改成amd

  子namespace

  ///<reference path:'./xxx.ts'/>
  文件相互依赖注解
*/
namespace Home {
  export class Page {
    constructor() {
      console.log(1111);
    }
  }
}
