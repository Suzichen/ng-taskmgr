import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header;
  @Output() newTask: EventEmitter<void> = new EventEmitter();
  @Output() moveClick: EventEmitter<void> = new EventEmitter();
  @Output() deleteClick: EventEmitter<void> = new EventEmitter();
  @Output() editClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  new() {
    this.newTask.emit();
  }

  moveToList() {
    this.moveClick.emit();
  }

  deleteList() {
    this.deleteClick.emit();
  }

  editList() {
    this.editClick.emit();
  }

}
