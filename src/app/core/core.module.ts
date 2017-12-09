import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { createIcons } from '../utils/svg.util';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ]
})
export class CoreModule { 
  // 实现系统中只加载一次
  constructor(
    @SkipSelf()
    @Optional()
    parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {

    if (parent) {
      throw new Error('模块已存在，不能重复加载！')
    }

    // 加载svg图标库
    createIcons(ir,ds);

  }
}
