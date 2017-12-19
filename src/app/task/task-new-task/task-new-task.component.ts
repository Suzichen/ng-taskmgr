import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-new-task',
  templateUrl: './task-new-task.component.html',
  styleUrls: ['./task-new-task.component.scss']
})
export class TaskNewTaskComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<TaskNewTaskComponent>
  ) { }

  ngOnInit() {
  }

  onConfirm(): void {
    this.dialogRef.close();
  }

}
