import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  public avatar:string;

  constructor( ) { }

  ngOnInit() {
    this.avatar = this.item.owner.avatar?this.item.owner.avatar:'avatar-default';
  }

}
