import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TaskNewTaskComponent } from "../task-new-task/task-new-task.component";

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
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二：balabala',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          reminder: true,
          dueDate: new Date()
        }
      ]
    },
    {
      id: 3,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一：balabala',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          reminder: true,
          dueDate: new Date()
        },
        {
          id: 4,
          desc: '任务二：特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务特别长的任务',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '赵六',
            // avatar: 'avatars:svg-14'
          },
          dueDate: new Date()
        }
      ]
    }
  ]

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    let dialogRef = this.dialog.open(
      TaskNewTaskComponent,
      {
        width: '400px',
        disableClose: true
      }
    )
  }

}
