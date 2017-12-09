import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

// svg图标配置表
const ICONS = [
  {
    name: 'menu',
    url: '../../assets/svg/menu.svg'
  }
]

export const createIcons = (
  ir: MatIconRegistry,
  ds: DomSanitizer
) => {

  ICONS.forEach(icon => {
    ir.addSvgIcon(
      icon.name,
      ds.bypassSecurityTrustResourceUrl(icon.url)
    );
  })
  
}