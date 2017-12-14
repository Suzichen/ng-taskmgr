import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-invite',
  templateUrl: './project-invite.component.html',
  styleUrls: ['./project-invite.component.scss']
})
export class ProjectInviteComponent implements OnInit {

  private users = [
    {
      id: 1,
      name: '张三'
    },
    {
      id: 1,
      name: '李四'
    },
    {
      id: 1,
      name: '王五'
    }
  ]

  private user: {id: number, name: string};

  constructor(
    public dialogRef: MatDialogRef<ProjectInviteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
  }

  onConfirm(): void {
    this.dialogRef.close(this.user);
  }

  onUserSelectFn(user: {id: number, name: string}): string {
    return user ? user.name : '';
  }

}
