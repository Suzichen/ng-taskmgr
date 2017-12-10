import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public projects = [
    {
      title: '项目首页',
      desc: '按月查看您的任务',
      icon: 'projects'
    }
  ]

  public dates = [
    {
      title: '月视图',
      desc: '按月查看您的任务',
      icon: 'month'
    },
    {
      title: '周视图',
      desc: '按周查看您的任务',
      icon: 'week'
    },
    {
      title: '日视图',
      desc: '按天查看您的任务',
      icon: 'day' + new Date().getDate()
    }
  ]

  constructor(
  ) { }

  ngOnInit() {
    
  }

}
