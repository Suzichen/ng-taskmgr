import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-edit-list',
  templateUrl: './task-edit-list.component.html',
  styleUrls: ['./task-edit-list.component.scss']
})
export class TaskEditListComponent implements OnInit {

  public title: string;
  public value: string;

  constructor(
    public dialogRef: MatDialogRef<TaskEditListComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  onConfirm(): void {
    this.dialogRef.close(this.value);
  }

}
