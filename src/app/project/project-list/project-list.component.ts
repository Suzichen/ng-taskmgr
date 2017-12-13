import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public items = [
    {
      name: '测试项目一',
      coverImg: 'assets/img/covers/0.jpg',
      desc: '项目一的描述'
    },
    {
      name: '测试项目二',
      coverImg: 'assets/img/covers/1.jpg',
      desc: '项目二的描述'
    },
    {
      name: '测试项目三',
      coverImg: 'assets/img/covers/2.jpg',
      desc: '项目三的描述'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
