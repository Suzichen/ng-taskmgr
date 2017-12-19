import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  template: `
    <h1 matDialogTitle>{{title}}</h1>
  
    <mat-dialog-content>
      {{content}}
    </mat-dialog-content>
    
    <mat-dialog-actions>
      <button 
      mat-raised-button 
      type="button" 
      mat-dialog-close>
      关闭</button>
      <button 
      mat-raised-button 
      color="primary"
      type="button" 
      (click)="onConfirm()">保存</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class ConfirmComponent implements OnInit {

  public title: string;
  public content: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onConfirm(): void {
    this.dialogRef.close(
      {confirm: true}
    );
  }

}
