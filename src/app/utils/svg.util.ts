import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

// svg图标配置表
const ICONS = [
  {
    name: 'day',
    url: '../../assets/img/sidebar/day.svg'
  },
  {
    name: 'month',
    url: '../../assets/img/sidebar/month.svg'
  },
  {
    name: 'project',
    url: '../../assets/img/sidebar/project.svg'
  },
  {
    name: 'projects',
    url: '../../assets/img/sidebar/projects.svg'
  },
  {
    name: 'week',
    url: '../../assets/img/sidebar/week.svg'
  },
  {
    name: 'add',
    url: '../../assets/img/icons/add.svg'
  },
  {
    name: 'burger-navigation',
    url: '../../assets/img/icons/burger-navigation.svg'
  },
  {
    name: 'delete',
    url: '../../assets/img/icons/delete.svg'
  },
  {
    name: 'hand-grab-o',
    url: '../../assets/img/icons/hand-grab-o.svg'
  },
  {
    name: 'move',
    url: '../../assets/img/icons/move.svg'
  },
  {
    name: 'avatar-default',
    url: '../../assets/img/avatar/unassigned.svg'
  }
]

// svg头像
const AVATARS = {
  name: 'avatars',
  url: '../../assets/img/avatar/avatars.svg'
}

export const createIcons = (
  ir: MatIconRegistry,
  ds: DomSanitizer
) => {

  // 日期图标
  for(let i = 1; i < 32; i++) {
    ICONS.push({
      name: 'day' + i,
      url: '../../assets/img/days/day' + i + '.svg'
    })
  }

  ICONS.forEach(icon => {
    ir.addSvgIcon(
      icon.name,
      ds.bypassSecurityTrustResourceUrl(icon.url)
    );
  })

  ir.addSvgIconSetInNamespace(
    AVATARS.name,
    ds.bypassSecurityTrustResourceUrl(AVATARS.url)
  )
  
}