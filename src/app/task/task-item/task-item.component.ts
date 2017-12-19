import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Output() editClick: EventEmitter<void> = new EventEmitter();
  public avatar:string;

  constructor( ) { }

  ngOnInit() {
    this.avatar = this.item.owner.avatar?this.item.owner.avatar:'avatar-default';
  }

  editDialog() {
    this.editClick.emit();
  }

  checkboxClick(e: Event) {
    e.stopPropagation();
  }

}
