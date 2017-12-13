import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  public avatars: Array<string> = [];

  constructor() { }

  ngOnInit() {
    let len = [];
    for(let i = 1; i < 17; i ++) {
      this.avatars.push(
        `avatars:svg-${i}`
      )
    }
  }

}
