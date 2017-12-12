import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public darkTheme: boolean = false;
  changeTheme(event) {
    this.darkTheme = event;
  }
}
