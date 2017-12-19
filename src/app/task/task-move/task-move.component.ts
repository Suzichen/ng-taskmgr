import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-task-move',
  templateUrl: './task-move.component.html',
  styleUrls: ['./task-move.component.scss']
})
export class TaskMoveComponent implements OnInit {

  public lists: Array<Object>

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<TaskMoveComponent>
  ) { }

  ngOnInit() {
    this.lists = this.data;
  }
  
  onConfirm(): void {
    this.dialogRef.close();
  }

}
