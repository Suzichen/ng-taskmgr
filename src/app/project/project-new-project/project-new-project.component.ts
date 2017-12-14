import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-new-project',
  templateUrl: './project-new-project.component.html',
  styleUrls: ['./project-new-project.component.scss']
})
export class ProjectNewProjectComponent implements OnInit {

  private project = {
    name: '',
    desc: ''
  }

  constructor(
    public dialogRef: MatDialogRef<ProjectNewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    console.log(this.data)  // 测试
  }

  onConfirm(): void {
    this.dialogRef.close(this.project);
  }


}
