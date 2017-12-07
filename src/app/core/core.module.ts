// 核心模块
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { 
  // 实现系统中只加载一次
  constructor(
    @SkipSelf()
    @Optional()
    parent: CoreModule
  ) {
    if (parent) {
      throw new Error('模块已存在，不能重复加载！')
    }
  }
}
