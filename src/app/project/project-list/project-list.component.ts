import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectNewProjectComponent } from "../project-new-project/project-new-project.component";
import { ProjectInviteComponent } from "../project-invite/project-invite.component";
import { ConfirmComponent } from "../../shared/confirm/confirm.component";

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

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    let dialogRef = this.dialog.open(
      ProjectNewProjectComponent, {
        data: {title: '新建项目'}
      }
    );

    dialogRef.afterClosed()
      .subscribe(data => {
        if(!data) return;
        console.log(data)
      });
  }

  openEditDialog() {
    let dialogRef = this.dialog.open(
      ProjectNewProjectComponent, {
        data: {title: '修改项目'}
      }
    );

    dialogRef.afterClosed()
      .subscribe(data => {
        if(!data) return;
        console.log(data)
      });
  }

  openInviteDialog() {
    let dialogRef = this.dialog.open(
      ProjectInviteComponent
    )

    dialogRef.afterClosed()
    .subscribe(data => {
      if(!data) return;
      console.log(data)
    })
  }

  openDeleteDialog() {
    let dialogRef = this.dialog.open(
      ConfirmComponent,
      {
        data: {title: '确定删除此项目？', content: '删除后不可恢复'}
      }
    )

    dialogRef.afterClosed()
    .subscribe(data => {
      if(!data) return;
      console.log(data)
    })
  }
}

