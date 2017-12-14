import { Component } from '@angular/core';

import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public darkTheme: boolean = false;

  constructor(
    private oc: OverlayContainer
  ) {}

  changeTheme(event) {
    this.darkTheme = event;
    if (!this.darkTheme) {
      this.oc.getContainerElement().classList.remove('my-app-dark-theme');
    } else {
      this.oc.getContainerElement().classList.add('my-app-dark-theme');
    }
  }
}