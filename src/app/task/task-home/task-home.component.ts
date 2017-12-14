import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  private lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：balabala',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatar:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二：balabala',
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一：balabala',
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar:svg-13'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二：balabala',
          owner: {
            id: 1,
            name: '赵六',
            avatar: 'avatar:svg-14'
          },
          dueDate: new Date()
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
