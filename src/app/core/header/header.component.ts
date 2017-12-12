import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggle: EventEmitter<void> = new EventEmitter();

  @Output()
  toggleDarkTheme: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggle.emit()
  }

  toggleTheme(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }
}
